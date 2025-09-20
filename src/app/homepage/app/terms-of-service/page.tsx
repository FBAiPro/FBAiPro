import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle, CreditCard, Users } from "lucide-react"

const sections = [
  {
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing and using FBA AI Pro, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
      },
      {
        subtitle: "Modifications",
        text: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform. Continued use of the service after such modifications constitutes acceptance of the updated terms.",
      },
    ],
  },
  {
    title: "Service Description",
    icon: Shield,
    content: [
      {
        subtitle: "AI-Powered Platform",
        text: "FBA AI Pro provides artificial intelligence-powered tools for Amazon FBA sellers, including product research, market analysis, listing optimization, and profit calculation services.",
      },
      {
        subtitle: "Data Sources",
        text: "Our platform aggregates data from various sources including Amazon's official APIs, public marketplaces, and proprietary algorithms to provide insights and recommendations.",
      },
      {
        subtitle: "Service Availability",
        text: "We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. Scheduled maintenance will be announced in advance when possible.",
      },
    ],
  },
  {
    title: "User Responsibilities",
    icon: Users,
    content: [
      {
        subtitle: "Account Security",
        text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      },
      {
        subtitle: "Lawful Use",
        text: "You agree to use our services only for lawful purposes and in accordance with Amazon's Terms of Service and all applicable laws and regulations.",
      },
      {
        subtitle: "Data Accuracy",
        text: "While we strive for accuracy, you acknowledge that market data can change rapidly and you should verify information before making business decisions.",
      },
    ],
  },
  {
    title: "Payment Terms",
    icon: CreditCard,
    content: [
      {
        subtitle: "Subscription Fees",
        text: "Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or as specified in our refund policy.",
      },
      {
        subtitle: "Price Changes",
        text: "We reserve the right to change our pricing with 30 days' notice. Existing subscribers will be grandfathered at their current rate for the remainder of their billing cycle.",
      },
      {
        subtitle: "Failed Payments",
        text: "If payment fails, your account may be suspended until payment is resolved. We will attempt to collect payment for up to 30 days before terminating your account.",
      },
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-[#232F3E] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-[#FF9900]">Terms of Service</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Please read these terms carefully before using our AI-powered Amazon FBA platform.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Scale className="h-5 w-5" />
                <span>Last updated: January 15, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="shadow-lg mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-[#FF9900] mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-[#232F3E] mb-4">Welcome to FBA AI Pro</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      These Terms of Service ("Terms") govern your use of the FBA AI Pro platform and services
                      (collectively, the "Service") operated by FBA AI Pro, Inc. ("us", "we", or "our").
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our Service provides AI-powered tools and insights for Amazon FBA sellers. By accessing or using
                      our Service, you agree to be bound by these Terms. If you disagree with any part of these terms,
                      then you may not access the Service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-[#232F3E]">
                      <section.icon className="h-6 w-6 text-[#FF9900]" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h3 className="text-lg font-semibold text-[#232F3E] mb-2">{item.subtitle}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="space-y-8 mt-12">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Prohibited Uses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      You may not use our Service for any of the following prohibited activities:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Violating any applicable laws or regulations</li>
                      <li>Infringing on intellectual property rights</li>
                      <li>Attempting to reverse engineer or hack our systems</li>
                      <li>Sharing your account credentials with unauthorized parties</li>
                      <li>Using our data to compete directly with our services</li>
                      <li>Scraping or automated data collection beyond API limits</li>
                      <li>Transmitting malware, viruses, or harmful code</li>
                      <li>Harassing or abusing other users or our support team</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      The Service and its original content, features, and functionality are and will remain the
                      exclusive property of FBA AI Pro and its licensors. The Service is protected by copyright,
                      trademark, and other laws.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our trademarks and trade dress may not be used in connection with any product or service without
                      our prior written consent. You retain ownership of any content you submit to our platform, but
                      grant us a license to use it for providing our services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Disclaimers and Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <strong>No Investment Advice:</strong> Our platform provides data and insights for informational
                      purposes only. We do not provide investment, financial, or business advice. All business decisions
                      are your responsibility.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Data Accuracy:</strong> While we strive for accuracy, we cannot guarantee that all data is
                      error-free or up-to-date. Market conditions change rapidly, and you should verify information
                      independently.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Third-Party Services:</strong> We integrate with third-party services including Amazon
                      APIs. We are not responsible for the availability or accuracy of these external services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-[#232F3E]">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    In no event shall FBA AI Pro, nor its directors, employees, partners, agents, suppliers, or
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                    resulting from your use of the Service.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <strong>By You:</strong> You may terminate your account at any time by contacting our support team
                      or through your account settings. Upon termination, your right to use the Service will cease
                      immediately.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>By Us:</strong> We may terminate or suspend your account immediately, without prior notice
                      or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Effect of Termination:</strong> Upon termination, your access to the Service will be
                      discontinued, and any data associated with your account may be deleted after a reasonable grace
                      period.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms shall be interpreted and governed by the laws of the State of California, United States,
                    without regard to its conflict of law provisions. Any disputes arising from these Terms or your use
                    of the Service will be resolved through binding arbitration in San Francisco, California.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Severability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                    changed and interpreted to accomplish the objectives of such provision to the greatest extent
                    possible under applicable law, and the remaining provisions will continue in full force and effect.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg border-[#FF9900]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-[#232F3E]">
                    <FileText className="h-6 w-6 text-[#FF9900]" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Email:</strong> legal@fbaai.pro
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Tech Street, Suite 400, San Francisco, CA 94105
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
