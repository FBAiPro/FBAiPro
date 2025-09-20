"use client"

import * as React from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, DollarSign, TrendingUp, PieChart, BarChart3, Target } from "lucide-react"
import { motion } from "framer-motion"

interface ProfitData {
  revenue: number
  costs: number
  profit: number
  margin: number
  roi: number
}

export default function ProfitCalculatorPage() {
  const [productPrice, setProductPrice] = React.useState("")
  const [productCost, setProductCost] = React.useState("")
  const [amazonFees, setAmazonFees] = React.useState("")
  const [shippingCost, setShippingCost] = React.useState("")
  const [advertisingCost, setAdvertisingCost] = React.useState("")
  const [monthlySales, setMonthlySales] = React.useState("")

  const [profitData, setProfitData] = React.useState<ProfitData | null>(null)

  React.useEffect(() => {
    const price = Number.parseFloat(productPrice) || 0
    const cost = Number.parseFloat(productCost) || 0
    const fees = Number.parseFloat(amazonFees) || 0
    const shipping = Number.parseFloat(shippingCost) || 0
    const advertising = Number.parseFloat(advertisingCost) || 0
    const sales = Number.parseFloat(monthlySales) || 0

    if (price > 0) {
      const totalCosts = cost + fees + shipping + advertising
      const profit = price - totalCosts
      const margin = (profit / price) * 100
      const monthlyRevenue = price * sales
      const monthlyProfit = profit * sales
      const roi = cost > 0 ? (profit / cost) * 100 : 0

      setProfitData({
        revenue: monthlyRevenue,
        costs: totalCosts * sales,
        profit: monthlyProfit,
        margin: margin,
        roi: roi,
      })
    } else {
      setProfitData(null)
    }
  }, [productPrice, productCost, amazonFees, shippingCost, advertisingCost, monthlySales])

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
                Advanced <span className="text-[#FF9900]">Profit Calculator</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Calculate your Amazon FBA profits with precision. Factor in all costs, fees, and variables to make
                data-driven decisions for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-[#FF9900] shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Calculator className="h-6 w-6 text-[#FF9900]" />
                      Profit Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Tabs defaultValue="basic" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="basic">Basic</TabsTrigger>
                        <TabsTrigger value="advanced">Advanced</TabsTrigger>
                      </TabsList>

                      <TabsContent value="basic" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="price">Product Selling Price ($)</Label>
                          <Input
                            id="price"
                            type="number"
                            placeholder="29.99"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cost">Product Cost ($)</Label>
                          <Input
                            id="cost"
                            type="number"
                            placeholder="12.50"
                            value={productCost}
                            onChange={(e) => setProductCost(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="fees">Amazon Fees ($)</Label>
                          <Input
                            id="fees"
                            type="number"
                            placeholder="4.50"
                            value={amazonFees}
                            onChange={(e) => setAmazonFees(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="shipping">Shipping Cost ($)</Label>
                          <Input
                            id="shipping"
                            type="number"
                            placeholder="2.00"
                            value={shippingCost}
                            onChange={(e) => setShippingCost(e.target.value)}
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="advanced" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="advertising">Advertising Cost per Sale ($)</Label>
                          <Input
                            id="advertising"
                            type="number"
                            placeholder="3.00"
                            value={advertisingCost}
                            onChange={(e) => setAdvertisingCost(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sales">Monthly Sales Volume</Label>
                          <Input
                            id="sales"
                            type="number"
                            placeholder="100"
                            value={monthlySales}
                            onChange={(e) => setMonthlySales(e.target.value)}
                          />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <BarChart3 className="h-6 w-6 text-[#FF9900]" />
                      Profit Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {profitData ? (
                      <div className="space-y-6">
                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-green-700">${profitData.profit.toFixed(2)}</div>
                            <div className="text-sm text-green-600">Monthly Profit</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <PieChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-700">{profitData.margin.toFixed(1)}%</div>
                            <div className="text-sm text-blue-600">Profit Margin</div>
                          </div>
                        </div>

                        {/* Detailed Breakdown */}
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Monthly Revenue</span>
                            <span className="text-lg font-bold text-[#FF9900]">${profitData.revenue.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Total Costs</span>
                            <span className="text-lg font-bold text-red-600">${profitData.costs.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                            <span className="font-medium">Net Profit</span>
                            <span className="text-lg font-bold text-green-700">${profitData.profit.toFixed(2)}</span>
                          </div>
                        </div>

                        {/* ROI */}
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-purple-700">{profitData.roi.toFixed(1)}%</div>
                          <div className="text-sm text-purple-600">Return on Investment</div>
                        </div>

                        {/* Profit Status */}
                        <div className="text-center">
                          {profitData.margin > 20 ? (
                            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Highly Profitable</Badge>
                          ) : profitData.margin > 10 ? (
                            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
                              Moderately Profitable
                            </Badge>
                          ) : profitData.margin > 0 ? (
                            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Low Profit Margin</Badge>
                          ) : (
                            <Badge variant="destructive" className="text-lg px-4 py-2">
                              Not Profitable
                            </Badge>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p>Enter your product details to see profit analysis</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Profit Optimization Tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#232F3E] mb-8 text-center">Profit Optimization Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Optimize Pricing</h3>
                    <p className="text-gray-600">
                      Use dynamic pricing strategies to maximize profit margins while staying competitive.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Reduce Costs</h3>
                    <p className="text-gray-600">
                      Negotiate better supplier rates and optimize shipping to improve your bottom line.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Scale Volume</h3>
                    <p className="text-gray-600">
                      Increase sales volume through better marketing and listing optimization.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#232F3E] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">
                Ready to <span className="text-[#FF9900]">Maximize Your Profits?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get advanced profit analytics, cost optimization suggestions, and automated profit tracking.
              </p>
              <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white text-lg px-8 py-3">Start Free Trial</Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
