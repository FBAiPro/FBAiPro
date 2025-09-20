"use client"

import * as React from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, TrendingDown, Globe, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

const marketData = {
  totalMarketSize: "$684.12B",
  growthRate: "+12.3%",
  activeMarkets: 47,
  topCategories: [
    { name: "Electronics", size: "$156.8B", growth: "+15.2%", trend: "up" },
    { name: "Home & Garden", size: "$89.4B", growth: "+8.7%", trend: "up" },
    { name: "Sports & Outdoors", size: "$67.2B", growth: "+11.1%", trend: "up" },
    { name: "Health & Beauty", size: "$54.9B", growth: "-2.1%", trend: "down" },
  ],
  regionalData: [
    { region: "North America", revenue: "$298.5B", growth: "+10.8%" },
    { region: "Europe", revenue: "$187.3B", growth: "+14.2%" },
    { region: "Asia Pacific", revenue: "$156.7B", growth: "+18.9%" },
    { region: "Latin America", revenue: "$41.6B", growth: "+7.3%" },
  ],
}

const competitorAnalysis = [
  {
    name: "TechGadget Pro",
    marketShare: "23.4%",
    revenue: "$45.2M",
    growth: "+18.5%",
    strength: "Innovation",
    weakness: "Pricing",
  },
  {
    name: "HomeEssentials",
    marketShare: "18.7%",
    revenue: "$36.1M",
    growth: "+12.3%",
    strength: "Brand Recognition",
    weakness: "Limited Range",
  },
  {
    name: "FitnessFirst",
    marketShare: "15.2%",
    revenue: "$29.4M",
    growth: "+8.9%",
    strength: "Quality",
    weakness: "Marketing",
  },
]

export default function MarketAnalysisPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("Electronics")
  const [isAnalyzing, setIsAnalyzing] = React.useState(false)

  const runAnalysis = async () => {
    setIsAnalyzing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsAnalyzing(false)
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-[#232F3E] text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-6">
                Advanced <span className="text-[#FF9900]">Market Analysis</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get deep insights into market trends, competitor analysis, and growth opportunities with our AI-powered
                market intelligence platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-[#FF9900] shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <BarChart3 className="h-6 w-6 text-[#FF9900]" />
                    Real-Time Market Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF9900]">{marketData.totalMarketSize}</div>
                      <div className="text-sm text-gray-600">Total Market Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{marketData.growthRate}</div>
                      <div className="text-sm text-gray-600">YoY Growth Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{marketData.activeMarkets}</div>
                      <div className="text-sm text-gray-600">Active Markets</div>
                    </div>
                    <div className="text-center">
                      <Button
                        onClick={runAnalysis}
                        disabled={isAnalyzing}
                        className="bg-[#FF9900] hover:bg-[#E68900] text-white"
                      >
                        {isAnalyzing ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Analyzing...
                          </div>
                        ) : (
                          <>
                            <Zap className="h-4 w-4 mr-2" />
                            Run Analysis
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Category Analysis */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#232F3E] mb-8">Top Categories Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketData.topCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedCategory === category.name ? "border-[#FF9900] shadow-lg" : ""
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-[#232F3E]">{category.name}</h3>
                        {category.trend === "up" ? (
                          <TrendingUp className="h-5 w-5 text-green-500" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-[#FF9900]">{category.size}</div>
                        <Badge
                          variant={category.trend === "up" ? "default" : "destructive"}
                          className={category.trend === "up" ? "bg-green-100 text-green-800" : ""}
                        >
                          {category.growth}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Analysis */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#232F3E] mb-8 text-center">Regional Market Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketData.regionalData.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Globe className="h-8 w-8 text-[#FF9900] mx-auto mb-4" />
                      <h3 className="font-semibold text-[#232F3E] mb-2">{region.region}</h3>
                      <div className="text-2xl font-bold text-[#FF9900] mb-2">{region.revenue}</div>
                      <Badge className="bg-green-100 text-green-800">{region.growth}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitor Analysis */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#232F3E] mb-8">Competitor Intelligence</h2>
            <div className="space-y-6">
              {competitorAnalysis.map((competitor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-center">
                        <div className="lg:col-span-2">
                          <h3 className="text-xl font-semibold text-[#232F3E] mb-2">{competitor.name}</h3>
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Market Share: {competitor.marketShare}</span>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#FF9900]">{competitor.revenue}</div>
                          <div className="text-sm text-gray-600">Annual Revenue</div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{competitor.growth}</div>
                          <div className="text-sm text-gray-600">Growth Rate</div>
                        </div>

                        <div className="text-center">
                          <Badge className="bg-blue-100 text-blue-800 mb-1">{competitor.strength}</Badge>
                          <div className="text-sm text-gray-600">Strength</div>
                        </div>

                        <div className="text-center">
                          <Badge variant="outline" className="mb-1">
                            {competitor.weakness}
                          </Badge>
                          <div className="text-sm text-gray-600">Weakness</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunities */}
        <section className="py-16 bg-[#232F3E] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">
                Discover <span className="text-[#FF9900]">Market Opportunities</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our AI identifies untapped market segments and emerging trends before your competitors do.
              </p>
              <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white text-lg px-8 py-3">
                Get Market Report
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
