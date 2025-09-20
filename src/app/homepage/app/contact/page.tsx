"use client"

import * as React from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help from our expert team",
    contact: "support@fbaai.pro",
    responseTime: "< 2 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available 24/7",
    responseTime: "Instant",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    contact: "+1 (555) 123-4567",
    responseTime: "Business hours",
  },
]

const officeLocations = [
  {
    city: "San Francisco",
    address: "123 Tech Street, Suite 400",
    zipCode: "San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@fbaai.pro",
  },
  {
    city: "New York",
    address: "456 Business Ave, Floor 12",
    zipCode: "New York, NY 10001",
    phone: "+1 (555) 987-6543",
    email: "ny@fbaai.pro",
  },
]

const faqs = [
  {
    question: "How quickly can I see results?",
    answer:
      "Most users see improvements in their product research and listing performance within the first week of using our platform.",
  },
  {
    question: "Do you offer training or onboarding?",
    answer: "Yes! We provide comprehensive onboarding, video tutorials, and ongoing support to ensure your success.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time with no cancellation fees or long-term commitments.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
                Get in <span className="text-[#FF9900]">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Have questions about FBA AI Pro? Need help getting started? Our expert team is here to help you succeed
                on Amazon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow text-center">
                    <CardContent className="p-8">
                      <method.icon className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-[#232F3E] mb-2">{method.title}</h3>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      <div className="text-lg font-semibold text-[#FF9900] mb-2">{method.contact}</div>
                      <Badge variant="outline">{method.responseTime}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#232F3E]">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" name="company" value={formData.company} onChange={handleInputChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-[#FF9900] hover:bg-[#E68900] text-white">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Office Locations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Our Offices</h2>
                    <div className="space-y-6">
                      {officeLocations.map((office, index) => (
                        <Card key={index} className="shadow-lg">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-[#232F3E] mb-4">{office.city}</h3>
                            <div className="space-y-3 text-gray-600">
                              <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#FF9900] mt-0.5" />
                                <div>
                                  <div>{office.address}</div>
                                  <div>{office.zipCode}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#FF9900]" />
                                <div>{office.phone}</div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[#FF9900]" />
                                <div>{office.email}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Business Hours */}
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#232F3E] mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[#FF9900]" />
                        Business Hours
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 6:00 PM PST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM PST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800">
                          <Headphones className="h-4 w-4" />
                          <span className="text-sm font-medium">24/7 Chat Support Available</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions about FBA AI Pro.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-[#232F3E] mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
                Ready to Get <span className="text-[#FF9900]">Started?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait to transform your Amazon business. Start your free trial today and see the difference AI can
                make.
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
