"use client"

import * as React from "react"
import { PageLayout } from "@/app/homepage/components/layout/page-layout"
import { Button } from "@/app/homepage/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/homepage/components/ui/card"
import { Input } from "@/app/homepage/components/ui/input"
import { Textarea } from "@/app/homepage/components/ui/textarea"
import { Badge } from "@/app/homepage/components/ui/badge"
import { Progress } from "@/app/homepage/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/homepage/components/ui/tabs"
import { Search, Star, TrendingUp, Zap, CheckCircle, Target, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const optimizationData = {
  currentScore: 72,
  potentialScore: 94,
  improvements: [
    { category: "Title Optimization", current: 65, potential: 90, impact: "High" },
    { category: "Keyword Density", current: 78, potential: 95, impact: "Medium" },
    { category: "Image Quality", current: 82, potential: 98, impact: "High" },
    { category: "Bullet Points", current: 70, potential: 92, impact: "Medium" },
    { category: "Backend Keywords", current: 60, potential: 88, impact: "High" },
  ],
}

const aiSuggestions = [
  {
    type: "Title",
    current: "Wireless Bluetooth Earbuds",
    suggested: "Wireless Bluetooth Earbuds 5.0 - Noise Cancelling, 24H Battery, IPX7 Waterproof",
    impact: "+23% visibility",
    reason: "Added key features and benefits that customers search for",
  },
  {
    type: "Keywords",
    current: "earbuds, wireless, bluetooth",
    suggested: "wireless earbuds, bluetooth 5.0, noise cancelling headphones, waterproof earbuds, long battery life",
    impact: "+18% search ranking",
    reason: "Included high-volume, low-competition keywords",
  },
]

export default function ListingOptimizationPage() {
  const [asin, setAsin] = React.useState("")
  const [isOptimizing, setIsOptimizing] = React.useState(false)
  const [optimizationResults, setOptimizationResults] = React.useState(null)

  const optimizeListing = async () => {
    if (!asin.trim()) return

    setIsOptimizing(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setOptimizationResults(optimizationData)
    setIsOptimizing(false)
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
                AI-Powered <span className="text-[#FF9900]">Listing Optimization</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Maximize your Amazon listing performance with AI-driven optimization. Improve visibility, conversion
                rates, and sales with data-backed recommendations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Optimization Tool */}
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
                    Listing Optimization Engine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter your Amazon ASIN (e.g., B08N5WRWNW)"
                        value={asin}
                        onChange={(e) => setAsin(e.target.value)}
                        className="text-lg py-3"
                      />
                    </div>
                    <Button
                      onClick={optimizeListing}
                      disabled={isOptimizing}
                      className="bg-[#FF9900] hover:bg-[#E68900] text-white px-8 py-3 text-lg"
                    >
                      {isOptimizing ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Optimizing...
                        </div>
                      ) : (
                        <>
                          <Search className="h-5 w-5 mr-2" />
                          Optimize
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Live Performance Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">Listings Optimized</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-700">47,392</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-600">Avg. Improvement</span>
                      </div>
                      <div className="text-2xl font-bold text-green-700">+34.2%</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-purple-600">Avg. Rating Boost</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-700">+0.8</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-orange-600" />
                        <span className="text-sm font-medium text-orange-600">Conversion Rate</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-700">+28.5%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Optimization Results */}
        {optimizationResults && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Optimization Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Current Score</span>
                          <span className="text-2xl font-bold text-red-600">{optimizationResults.currentScore}%</span>
                        </div>
                        <Progress value={optimizationResults.currentScore} className="mb-4" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Potential Score</span>
                          <span className="text-2xl font-bold text-green-600">
                            {optimizationResults.potentialScore}%
                          </span>
                        </div>
                        <Progress value={optimizationResults.potentialScore} className="mb-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="improvements" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="improvements">Improvements</TabsTrigger>
                    <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                  </TabsList>

                  <TabsContent value="improvements" className="space-y-6">
                    <div className="grid gap-6">
                      {optimizationResults.improvements.map((improvement, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-lg font-semibold">{improvement.category}</h3>
                              <Badge
                                variant={
                                  improvement.impact === "High"
                                    ? "destructive"
                                    : improvement.impact === "Medium"
                                      ? "default"
                                      : "secondary"
                                }
                              >
                                {improvement.impact} Impact
                              </Badge>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm">Current</span>
                                  <span className="font-semibold">{improvement.current}%</span>
                                </div>
                                <Progress value={improvement.current} />
                              </div>
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm">Potential</span>
                                  <span className="font-semibold text-green-600">{improvement.potential}%</span>
                                </div>
                                <Progress value={improvement.potential} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="suggestions" className="space-y-6">
                    <div className="grid gap-6">
                      {aiSuggestions.map((suggestion, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-lg font-semibold">{suggestion.type} Optimization</h3>
                              <Badge className="bg-green-100 text-green-800">{suggestion.impact}</Badge>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <label className="text-sm font-medium text-gray-600">Current</label>
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                  {suggestion.current}
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-600">AI Suggestion</label>
                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                  {suggestion.suggested}
                                </div>
                              </div>
                              <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                  <div className="font-medium text-blue-800">Why this works:</div>
                                  <div className="text-blue-700">{suggestion.reason}</div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="keywords" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Keyword Research & Optimization</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">Primary Keywords</label>
                            <Textarea placeholder="Enter your primary keywords..." className="mt-2" rows={3} />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Backend Keywords</label>
                            <Textarea placeholder="Enter your backend search terms..." className="mt-2" rows={3} />
                          </div>
                          <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white">Analyze Keywords</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-[#232F3E] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">
                Ready to <span className="text-[#FF9900]">Optimize Your Listings?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of sellers who have increased their sales by an average of 34% with our AI optimization.
              </p>
              <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white text-lg px-8 py-3">Start Free Trial</Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
