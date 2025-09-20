"use client"

import * as React from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Search, ChevronDown, BookOpen, MessageCircle, Video, FileText, Mail, Phone, Clock } from "lucide-react"
import { motion } from "framer-motion"

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    description: "Learn the basics of FBA AI Pro",
    articles: 12,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Product Research",
    icon: Search,
    description: "Master AI-powered product discovery",
    articles: 18,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Market Analysis",
    icon: FileText,
    description: "Understand market trends and data",
    articles: 15,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Listing Optimization",
    icon: MessageCircle,
    description: "Optimize your Amazon listings",
    articles: 22,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Profit Calculator",
    icon: FileText,
    description: "Calculate and optimize profits",
    articles: 8,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Account & Billing",
    icon: FileText,
    description: "Manage your subscription",
    articles: 10,
    color: "bg-yellow-50 text-yellow-600",
  },
]

const popularArticles = [
  {
    title: "How to Get Started with FBA AI Pro",
    category: "Getting Started",
    readTime: "5 min",
    views: "12.5K",
  },
  {
    title: "Finding Your First Profitable Product",
    category: "Product Research",
    readTime: "8 min",
    views: "9.2K",
  },
  {
    title: "Understanding Market Analysis Reports",
    category: "Market Analysis",
    readTime: "6 min",
    views: "7.8K",
  },
  {
    title: "Optimizing Your Product Listings for Maximum Sales",
    category: "Listing Optimization",
    readTime: "12 min",
    views: "11.3K",
  },
  {
    title: "Calculating True Amazon FBA Profitability",
    category: "Profit Calculator",
    readTime: "7 min",
    views: "8.9K",
  },
]

const faqs = [
  {
    question: "How does the AI product research work?",
    answer:
      "Our AI analyzes millions of data points including sales velocity, competition levels, pricing trends, and market demand to identify profitable product opportunities. The system continuously learns and improves its recommendations based on real market performance.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period, and you won't be charged for the next cycle.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
  },
  {
    question: "How accurate are the profit calculations?",
    answer:
      "Our profit calculator includes all Amazon fees, shipping costs, and other variables with 95%+ accuracy. We regularly update our fee structures to match Amazon's latest changes.",
  },
  {
    question: "Can I use FBA AI Pro for international Amazon marketplaces?",
    answer:
      "Yes, we support 47 international Amazon marketplaces including US, UK, Germany, France, Italy, Spain, Canada, Australia, and many more.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 chat support, email support with <2 hour response times, phone support during business hours, and comprehensive video tutorials and documentation.",
  },
]

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    responseTime: "< 1 minute",
    action: "Start Chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "24/7",
    responseTime: "< 2 hours",
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri 9AM-6PM PST",
    responseTime: "Immediate",
    action: "Call Now",
  },
  {
    icon: Video,
    title: "Screen Share",
    description: "Get personalized help with screen sharing",
    availability: "By appointment",
    responseTime: "Same day",
    action: "Schedule",
  },
]

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

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
                <span className="text-[#FF9900]">Help Center</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find answers, get support, and learn how to maximize your success with FBA AI Pro.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for help articles, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-4 text-lg bg-white text-black"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF9900] hover:bg-[#E68900]">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Browse by Category</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the help you need organized by topic and feature.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#232F3E] mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <Badge variant="outline">{category.articles} articles</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Popular Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most helpful articles based on user engagement and feedback.
              </p>
            </motion.div>

            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#232F3E] mb-2">{article.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <Badge variant="outline">{article.category}</Badge>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {article.readTime}
                            </div>
                            <div>{article.views} views</div>
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5 text-gray-400 rotate-[-90deg]" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to the most common questions.</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Collapsible
                    open={openFaq === index}
                    onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer">
                          <CardTitle className="flex items-center justify-between text-left">
                            <span className="text-lg text-[#232F3E]">{faq.question}</span>
                            <ChevronDown
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                openFaq === index ? "rotate-180" : ""
                              }`}
                            />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Need More Help?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert support team is here to help you succeed. Choose your preferred way to get in touch.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow text-center">
                    <CardContent className="p-6">
                      <option.icon className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-[#232F3E] mb-2">{option.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div>{option.availability}</div>
                        <div>Response: {option.responseTime}</div>
                      </div>
                      <Button className="w-full bg-[#FF9900] hover:bg-[#E68900] text-white">{option.action}</Button>
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
                Still Have <span className="text-[#FF9900]">Questions?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our support team is available 24/7 to help you succeed with FBA AI Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white text-lg px-8 py-3">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start Live Chat
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-white hover:bg-white hover:text-[#232F3E] text-lg px-8 py-3 bg-transparent"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
