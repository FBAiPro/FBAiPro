"use client"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Zap, Award, TrendingUp, Globe } from "lucide-react"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "/professional-woman-smiling.png",
    bio: "Former Amazon executive with 10+ years in e-commerce and AI. Led product teams that generated $500M+ in revenue.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    image: "/professional-man-smiling.png",
    bio: "AI/ML expert with PhD from Stanford. Previously built recommendation systems at Google and Netflix.",
  },
  {
    name: "Emily Johnson",
    role: "Head of Product",
    image: "/professional-woman-entrepreneur.png",
    bio: "Product strategist with deep FBA expertise. Helped 1000+ sellers optimize their Amazon businesses.",
  },
]

const stats = [
  { label: "Sellers Helped", value: "50,000+", icon: Users },
  { label: "Revenue Generated", value: "$2.1B+", icon: TrendingUp },
  { label: "Products Analyzed", value: "10M+", icon: Target },
  { label: "Countries Served", value: "47", icon: Globe },
]

const values = [
  {
    title: "AI-First Approach",
    description: "We believe artificial intelligence is the future of e-commerce optimization.",
    icon: Zap,
  },
  {
    title: "Data-Driven Decisions",
    description: "Every recommendation is backed by real market data and proven algorithms.",
    icon: Target,
  },
  {
    title: "Seller Success",
    description: "Your success is our success. We're committed to helping you grow your business.",
    icon: Award,
  },
]

export default function AboutPage() {
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
                About <span className="text-[#FF9900]">FBA AI Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're on a mission to democratize Amazon FBA success through artificial intelligence. Our platform
                empowers sellers of all sizes to compete with enterprise-level insights and automation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#232F3E] mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To level the playing field for Amazon sellers by providing enterprise-grade AI tools that were
                previously only available to large corporations. We believe every entrepreneur deserves access to the
                same powerful insights and automation that drive the most successful Amazon businesses.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
                      <div className="text-3xl font-bold text-[#232F3E] mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-[#232F3E] mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    FBA AI Pro was born from frustration. Our founders, Sarah and Marcus, were successful Amazon sellers
                    who spent countless hours manually researching products, analyzing competitors, and optimizing
                    listings.
                  </p>
                  <p>
                    They realized that while large corporations had teams of data scientists and expensive tools, small
                    sellers were left to make decisions based on gut feelings and limited data.
                  </p>
                  <p>
                    In 2022, they decided to change that. Combining Sarah's deep Amazon expertise with Marcus's AI
                    background, they built the first version of our platform. What started as a tool for their own
                    businesses quickly became the go-to solution for thousands of sellers worldwide.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-[#FF9900] mb-4">2022</div>
                      <div className="text-xl font-semibold text-[#232F3E] mb-4">Founded</div>
                      <div className="text-gray-600">
                        Started with a simple idea: make AI-powered Amazon insights accessible to everyone
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#232F3E] mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do, from product development to customer support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-8 text-center">
                      <value.icon className="h-16 w-16 text-[#FF9900] mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold text-[#232F3E] mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#232F3E] mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're a diverse team of Amazon experts, AI engineers, and product builders united by our passion for
                helping sellers succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `/placeholder.svg?height=128&width=128&query=${member.name}`
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#232F3E] mb-2">{member.name}</h3>
                      <Badge className="bg-[#FF9900] text-white mb-4">{member.role}</Badge>
                      <p className="text-gray-600 leading-relaxed">{member.bio}</p>
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
                Ready to Join <span className="text-[#FF9900]">50,000+ Successful Sellers?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the power of AI-driven Amazon FBA optimization. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#FF9900] hover:bg-[#E68900] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-gray-300 text-white hover:bg-white hover:text-[#232F3E] px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
