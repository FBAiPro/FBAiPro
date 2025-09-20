import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react"

const sections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        subtitle: "Account Information",
        text: "When you create an account, we collect your name, email address, and billing information necessary to provide our services.",
      },
      {
        subtitle: "Usage Data",
        text: "We collect information about how you use our platform, including search queries, features accessed, and performance metrics to improve our AI algorithms.",
      },
      {
        subtitle: "Amazon Data",
        text: "With your permission, we access Amazon marketplace data through official APIs to provide product research and market analysis services.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    icon: UserCheck,
    content: [
      {
        subtitle: "Service Provision",
        text: "We use your information to provide AI-powered Amazon FBA insights, product research, and optimization recommendations.",
      },
      {
        subtitle: "Platform Improvement",
        text: "Usage data helps us improve our AI algorithms, add new features, and enhance the overall user experience.",
      },
      {
        subtitle: "Communication",
        text: "We may send you service updates, security alerts, and promotional communications (which you can opt out of at any time).",
      },
    ],
  },
  {
    title: "Data Security",
    icon: Lock,
    content: [
      {
        subtitle: "Encryption",
        text: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.",
      },
      {
        subtitle: "Access Controls",
        text: "We implement strict access controls and regularly audit our systems to ensure only authorized personnel can access your data.",
      },
      {
        subtitle: "Regular Security Audits",
        text: "Our security practices are regularly reviewed by third-party security firms to maintain the highest standards.",
      },
    ],
  },
  {
    title: "Your Rights",
    icon: Shield,
    content: [
      {
        subtitle: "Data Access",
        text: "You have the right to access, update, or delete your personal information at any time through your account settings.",
      },
      {
        subtitle: "Data Portability",
        text: "You can export your data in a machine-readable format if you choose to switch to another service.",
      },
      {
        subtitle: "Opt-Out Rights",
        text: "You can opt out of marketing communications and certain data collection practices while still using our core services.",
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-[#232F3E] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-[#FF9900]">Privacy Policy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Eye className="h-5 w-5" />
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
                  <Shield className="h-8 w-8 text-[#FF9900] mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-[#232F3E] mb-4">Our Commitment to Privacy</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      At FBA AI Pro, we are committed to protecting your privacy and ensuring the security of your
                      personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                      your information when you use our AI-powered Amazon FBA platform.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      By using our services, you agree to the collection and use of information in accordance with this
                      policy. We will not use or share your information with anyone except as described in this Privacy
                      Policy.
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
                  <CardTitle className="text-2xl text-[#232F3E]">Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Our platform integrates with various third-party services to provide comprehensive Amazon FBA
                      insights:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>
                        <strong>Amazon APIs:</strong> We use official Amazon APIs to access marketplace data for product
                        research and analysis.
                      </li>
                      <li>
                        <strong>Payment Processors:</strong> We use Stripe and PayPal to process payments securely.
                      </li>
                      <li>
                        <strong>Analytics Services:</strong> We use Google Analytics and Mixpanel to understand user
                        behavior and improve our services.
                      </li>
                      <li>
                        <strong>Cloud Infrastructure:</strong> We use AWS and Vercel for hosting and data processing.
                      </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                      These third-party services have their own privacy policies, and we encourage you to review them.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      We retain your personal information only for as long as necessary to provide our services and
                      comply with legal obligations:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>
                        <strong>Account Data:</strong> Retained while your account is active and for 30 days after
                        deletion.
                      </li>
                      <li>
                        <strong>Usage Data:</strong> Aggregated and anonymized data may be retained for up to 2 years
                        for analytics purposes.
                      </li>
                      <li>
                        <strong>Billing Information:</strong> Retained for 7 years as required by tax and accounting
                        regulations.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure
                    that such transfers comply with applicable data protection laws and implement appropriate safeguards
                    to protect your information, including Standard Contractual Clauses approved by the European
                    Commission.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13. If you are a parent or guardian and believe your child
                    has provided us with personal information, please contact us so we can delete such information.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#232F3E]">Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review
                    this Privacy Policy periodically for any changes.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg border-[#FF9900]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-[#232F3E]">
                    <Mail className="h-6 w-6 text-[#FF9900]" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Email:</strong> privacy@fbaai.pro
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
