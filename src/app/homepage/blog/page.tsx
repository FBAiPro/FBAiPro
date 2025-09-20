"use client"

import * as React from "react"
import { PageLayout } from "@/app/homepage/components/layout/page-layout"
import { Card, CardContent } from "@/app/homepage/components/ui/card"
import { Badge } from "@/app/homepage/components/ui/badge"
import { Button } from "@/app/homepage/components/ui/button"
import { Input } from "@/app/homepage/components/ui/input"
import { Calendar, Clock, User, Search } from "lucide-react"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "10 AI-Powered Strategies to Find Winning Amazon Products in 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing product research and learn the exact strategies top sellers use to identify profitable opportunities.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Product Research",
    image: "/ai-product-research-dashboard.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to Amazon Listing Optimization with AI",
    excerpt:
      "Learn how to use AI tools to optimize your Amazon listings for maximum visibility and conversion rates. Includes real case studies and results.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Listing Optimization",
    image: "/amazon-listing-optimization.jpg",
  },
  {
    id: 3,
    title: "Market Analysis: Q4 2023 Amazon FBA Trends and Predictions",
    excerpt:
      "Deep dive into the latest Amazon FBA market trends, category performance, and what sellers should expect in 2024.",
    author: "Emily Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Market Analysis",
    image: "/amazon-market-trends-charts.jpg",
  },
  {
    id: 4,
    title: "How to Calculate True Amazon FBA Profitability (Hidden Costs Revealed)",
    excerpt:
      "Most sellers underestimate their true costs. Learn the complete formula for calculating Amazon FBA profitability including hidden fees.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Profit Optimization",
    image: "/profit-calculator-spreadsheet.jpg",
  },
  {
    id: 5,
    title: "Amazon PPC Automation: AI vs Manual Campaign Management",
    excerpt:
      "Compare AI-powered PPC automation with traditional manual management. Which approach delivers better ROI for different seller types?",
    author: "Lisa Martinez",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "PPC & Advertising",
    image: "/amazon-ppc-dashboard.jpg",
  },
  {
    id: 6,
    title: "Inventory Management Strategies for Seasonal Amazon Products",
    excerpt:
      "Master the art of inventory planning for seasonal products. Learn how to avoid stockouts and minimize storage fees.",
    author: "James Wilson",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Inventory Management",
    image: "/inventory-management-charts.jpg",
  },
]

const categories = [
  "All Posts",
  "Product Research",
  "Listing Optimization",
  "Market Analysis",
  "Profit Optimization",
  "PPC & Advertising",
  "Inventory Management",
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Posts")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
                FBA AI Pro <span className="text-[#FF9900]">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead of the competition with expert insights, AI-powered strategies, and the latest Amazon FBA
                trends from our team of industry experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-[#FF9900] hover:bg-[#E68900] text-white"
                          : "hover:bg-[#FF9900] hover:text-white"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All Posts" && (
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative">
                        <img
                          src={featuredPost.image || "/placeholder.svg"}
                          alt={featuredPost.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-[#FF9900] text-white">Featured</Badge>
                      </div>
                      <div className="p-8 lg:p-12">
                        <Badge variant="outline" className="mb-4">
                          {featuredPost.category}
                        </Badge>
                        <h2 className="text-3xl font-bold text-[#232F3E] mb-4 leading-tight">{featuredPost.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white">Read Full Article</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-white text-[#232F3E]">{post.category}</Badge>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-[#232F3E] mb-3 leading-tight">{post.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-[#FF9900] hover:text-white bg-transparent"
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">No articles found matching your criteria.</div>
                <Button
                  onClick={() => {
                    setSelectedCategory("All Posts")
                    setSearchQuery("")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-[#232F3E] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">
                Stay Updated with <span className="text-[#FF9900]">Expert Insights</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the latest Amazon FBA strategies, AI insights, and market trends delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input placeholder="Enter your email" className="bg-white text-black" />
                <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white whitespace-nowrap">Subscribe Now</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
