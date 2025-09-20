"use client"
import { PageLayout } from "@/app/homepage/components/layout/page-layout"
import { Card, CardContent } from "@/app/homepage/components/ui/card"
import { Button } from "@/app/homepage/components/ui/button"
import { Star, TrendingUp, DollarSign, Users, Quote } from "lucide-react"
import { motion } from "framer-motion"

const successStories = [
  {
    name: "Jennifer Martinez",
    business: "Home & Garden Essentials",
    image: "/professional-woman-smiling.png",
    results: {
      revenue: "+340%",
      profit: "+280%",
      timeframe: "6 months",
    },
    quote:
      "FBA AI Pro transformed my business completely. What used to take me weeks of research now takes minutes. I've discovered profitable products I never would have found on my own.",
    products: "Kitchen gadgets, garden tools",
    beforeRevenue: "$8,500/month",
    afterRevenue: "$37,400/month",
  },
  {
    name: "David Kim",
    business: "Tech Accessories Pro",
    image: "/professional-man-smiling.png",
    results: {
      revenue: "+520%",
      profit: "+450%",
      timeframe: "8 months",
    },
    quote:
      "The AI-powered product research is incredible. I went from struggling to find one good product to having a pipeline of 15+ profitable products. My ROI has never been better.",
    products: "Phone accessories, cables",
    beforeRevenue: "$12,000/month",
    afterRevenue: "$74,400/month",
  },
  {
    name: "Sarah Thompson",
    business: "Fitness & Wellness",
    image: "/professional-woman-entrepreneur.png",
    results: {
      revenue: "+290%",
      profit: "+320%",
      timeframe: "4 months",
    },
    quote:
      "The listing optimization feature alone paid for itself in the first month. My conversion rates doubled, and I'm ranking higher for all my target keywords.",
    products: "Yoga equipment, supplements",
    beforeRevenue: "$15,200/month",
    afterRevenue: "$59,280/month",
  },
]

const metrics = [
  { label: "Average Revenue Increase", value: "340%", icon: TrendingUp },
  { label: "Average Profit Increase", value: "280%", icon: DollarSign },
  { label: "Success Rate", value: "94%", icon: Star },
  { label: "Active Users", value: "50,000+", icon: Users },
]

const testimonials = [
  {
    name: "Michael Chen",
    role: "Amazon Seller",
    quote:
      "This platform is a game-changer. The AI insights are spot-on and have helped me scale from $20K to $150K monthly revenue.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "E-commerce Entrepreneur",
    quote: "I wish I had found FBA AI Pro sooner. It would have saved me thousands in failed product launches.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "FBA Seller",
    quote:
      "The profit calculator and market analysis tools are incredibly accurate. My decision-making has improved dramatically.",
    rating: 5,
  },
]

export default function SuccessStoriesPage() {
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
                <span className="text-[#FF9900]">Success Stories</span> That Inspire
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real sellers, real results. Discover how FBA AI Pro has helped thousands of entrepreneurs transform
                their Amazon businesses and achieve financial freedom.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Metrics Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <metric.icon className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
                      <div className="text-3xl font-bold text-[#232F3E] mb-2">{metric.value}</div>
                      <div className="text-gray-600">{metric.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Success Stories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#232F3E] mb-6">Featured Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the sellers who've transformed their businesses with our AI-powered platform.
              </p>
            </motion.div>

            <div className="space-y-12">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Story Content */}
                        <div className="p-8 lg:p-12">
                          <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                              <img
                                src={story.image || "/placeholder.svg"}
                                alt={story.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = `/placeholder.svg?height=64&width=64&query=${story.name}`
                                }}
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-[#232F3E]">{story.name}</h3>
                              <p className="text-gray-600">{story.business}</p>
                            </div>
                          </div>

                          <div className="mb-6">
                            <Quote className="h-8 w-8 text-[#FF9900] mb-4" />
                            <p className="text-lg text-gray-700 leading-relaxed italic">{story.quote}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <div className="text-sm text-gray-600">Before</div>
                              <div className="text-lg font-semibold text-red-600">{story.beforeRevenue}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">After</div>
                              <div className="text-lg font-semibold text-green-600">{story.afterRevenue}</div>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600">
                            <strong>Products:</strong> {story.products}
                          </div>
                        </div>

                        {/* Results Panel */}
                        <div className="bg-gradient-to-br from-[#FF9900] to-[#E68900] p-8 lg:p-12 text-white">
                          <h4 className="text-2xl font-bold mb-8">Results in {story.results.timeframe}</h4>
                          <div className="space-y-6">
                            <div className="flex justify-between items-center">
                              <span className="text-lg">Revenue Growth</span>
                              <span className="text-3xl font-bold">{story.results.revenue}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-lg">Profit Growth</span>
                              <span className="text-3xl font-bold">{story.results.profit}</span>
                            </div>
                            <div className="pt-4 border-t border-white/20">
                              <div className="text-center">
                                <div className="text-sm opacity-90">Monthly Revenue</div>
                                <div className="text-2xl font-bold">{story.afterRevenue}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#232F3E] mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied sellers who've transformed their Amazon businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="border-t pt-4">
                        <div className="font-semibold text-[#232F3E]">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#232F3E] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Write Your Own <span className="text-[#FF9900]">Success Story?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the thousands of sellers who've transformed their Amazon businesses with FBA AI Pro. Start your
                journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white text-lg px-8 py-3">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-white hover:bg-white hover:text-[#232F3E] text-lg px-8 py-3 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
