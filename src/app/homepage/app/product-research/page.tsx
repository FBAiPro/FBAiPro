"use client"

import * as React from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, DollarSign, Users, Star, ArrowRight, Zap, Target, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const mockProducts = [
  {
    id: 1,
    title: "Wireless Bluetooth Earbuds",
    price: "$29.99",
    monthlyRevenue: "$45,000",
    competition: "Medium",
    demand: "High",
    rating: 4.3,
    reviews: 2847,
    trend: "+15%",
    opportunity: "High",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Yoga Mat Non-Slip",
    price: "$24.99",
    monthlyRevenue: "$32,000",
    competition: "Low",
    demand: "Medium",
    rating: 4.6,
    reviews: 1523,
    trend: "+8%",
    opportunity: "Medium",
    category: "Sports & Outdoors",
  },
  {
    id: 3,
    title: "LED Desk Lamp",
    price: "$39.99",
    monthlyRevenue: "$28,000",
    competition: "High",
    demand: "Medium",
    rating: 4.1,
    reviews: 892,
    trend: "+3%",
    opportunity: "Low",
    category: "Home & Garden",
  },
]

const trendingKeywords = [
  { keyword: "wireless earbuds", searches: "1.2M", competition: "High", cpc: "$1.45" },
  { keyword: "yoga accessories", searches: "890K", competition: "Medium", cpc: "$0.89" },
  { keyword: "home office", searches: "2.1M", competition: "High", cpc: "$2.10" },
  { keyword: "fitness equipment", searches: "1.8M", competition: "Medium", cpc: "$1.67" },
]

export default function ProductResearchPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const [results, setResults] = React.useState(mockProducts)

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Filter results based on search query
    const filteredResults = mockProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setResults(filteredResults.length > 0 ? filteredResults : mockProducts)
    setIsSearching(false)
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
                AI-Powered <span className="text-[#FF9900]">Product Research</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover profitable products with our advanced AI algorithms. Analyze market trends, competition, and
                profit potential in real-time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Command Center */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-[#FF9900] shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Zap className="h-6 w-6 text-[#FF9900]" />
                    AI Product Discovery Engine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter product keywords, category, or ASIN..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-lg py-3"
                        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      />
                    </div>
                    <Button
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="bg-[#FF9900] hover:bg-[#E68900] text-white px-8 py-3 text-lg"
                    >
                      {isSearching ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Analyzing...
                        </div>
                      ) : (
                        <>
                          <Search className="h-5 w-5 mr-2" />
                          Search
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Live Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">Products Analyzed</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-700">2,847,392</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-600">Opportunities Found</span>
                      </div>
                      <div className="text-2xl font-bold text-green-700">15,847</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-purple-600">Markets Tracked</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-700">47</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-orange-600" />
                        <span className="text-sm font-medium text-orange-600">Avg. Profit Margin</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-700">34.2%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[#232F3E]">Product Opportunities</h2>
              <Badge variant="secondary" className="text-sm">
                {results.length} results found
              </Badge>
            </div>

            <div className="grid gap-6">
              {results.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-center">
                        <div className="lg:col-span-2">
                          <h3 className="text-xl font-semibold text-[#232F3E] mb-2">{product.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              {product.rating}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {product.reviews} reviews
                            </span>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#FF9900]">{product.price}</div>
                          <div className="text-sm text-gray-600">Current Price</div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{product.monthlyRevenue}</div>
                          <div className="text-sm text-gray-600">Monthly Revenue</div>
                        </div>

                        <div className="text-center">
                          <Badge
                            variant={
                              product.competition === "Low"
                                ? "default"
                                : product.competition === "Medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="mb-2"
                          >
                            {product.competition} Competition
                          </Badge>
                          <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            {product.trend}
                          </div>
                        </div>

                        <div className="text-center">
                          <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white">
                            Analyze
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Keywords */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#232F3E] mb-8 text-center">Trending Keywords</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingKeywords.map((keyword, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-[#232F3E] mb-2">{keyword.keyword}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>{keyword.searches} monthly searches</div>
                        <Badge variant="outline">{keyword.competition}</Badge>
                        <div className="text-[#FF9900] font-semibold">{keyword.cpc} CPC</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
