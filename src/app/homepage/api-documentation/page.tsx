"use client"

import * as React from "react"
import { PageLayout } from "@/app/homepage/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/homepage/components/ui/card"
import { Button } from "@/app/homepage/components/ui/button"
import { Badge } from "@/app/homepage/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/homepage/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/app/homepage/components/ui/collapsible"
import { Code, ChevronDown, Copy, ExternalLink, Key, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/products/research",
    description: "Search for profitable product opportunities",
    parameters: [
      { name: "query", type: "string", required: true, description: "Search keywords or category" },
      { name: "marketplace", type: "string", required: false, description: "Amazon marketplace (default: US)" },
      { name: "limit", type: "integer", required: false, description: "Number of results (max 100)" },
    ],
    response: {
      products: [
        {
          asin: "B08N5WRWNW",
          title: "Wireless Bluetooth Earbuds",
          price: 29.99,
          monthlyRevenue: 45000,
          competition: "Medium",
          opportunity: "High",
        },
      ],
    },
  },
  {
    method: "GET",
    endpoint: "/api/v1/market/analysis",
    description: "Get market analysis for a specific category",
    parameters: [
      { name: "category", type: "string", required: true, description: "Product category" },
      { name: "marketplace", type: "string", required: false, description: "Amazon marketplace" },
      { name: "timeframe", type: "string", required: false, description: "Analysis period (30d, 90d, 1y)" },
    ],
    response: {
      marketSize: "$156.8B",
      growthRate: "+15.2%",
      competition: "High",
      trends: ["increasing demand", "seasonal patterns"],
    },
  },
  {
    method: "POST",
    endpoint: "/api/v1/listings/optimize",
    description: "Optimize an Amazon listing using AI",
    parameters: [
      { name: "asin", type: "string", required: true, description: "Amazon ASIN" },
      { name: "targetKeywords", type: "array", required: false, description: "Target keywords for optimization" },
    ],
    response: {
      currentScore: 72,
      optimizedScore: 94,
      suggestions: [
        {
          type: "title",
          current: "Wireless Earbuds",
          suggested: "Wireless Bluetooth Earbuds 5.0 - Noise Cancelling, 24H Battery",
          impact: "+23% visibility",
        },
      ],
    },
  },
  {
    method: "POST",
    endpoint: "/api/v1/profit/calculate",
    description: "Calculate profit margins and ROI",
    parameters: [
      { name: "sellingPrice", type: "number", required: true, description: "Product selling price" },
      { name: "productCost", type: "number", required: true, description: "Cost of goods sold" },
      {
        name: "amazonFees",
        type: "number",
        required: false,
        description: "Amazon fees (auto-calculated if not provided)",
      },
      { name: "shippingCost", type: "number", required: false, description: "Shipping and logistics costs" },
    ],
    response: {
      revenue: 2999,
      totalCosts: 1950,
      profit: 1049,
      margin: 35.0,
      roi: 53.8,
    },
  },
]

const sdkExamples = [
  {
    language: "JavaScript",
    code: `import { FBAIProClient } from '@fbaai/sdk';

const client = new FBAIProClient({
  apiKey: 'your-api-key-here'
});

// Search for products
const products = await client.products.research({
  query: 'wireless earbuds',
  marketplace: 'US',
  limit: 10
});

console.log(products);`,
  },
  {
    language: "Python",
    code: `from fbaai import FBAIProClient

client = FBAIProClient(api_key='your-api-key-here')

# Search for products
products = client.products.research(
    query='wireless earbuds',
    marketplace='US',
    limit=10
)

print(products)`,
  },
  {
    language: "cURL",
    code: `curl -X GET "https://api.fbaai.pro/v1/products/research" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "wireless earbuds",
    "marketplace": "US",
    "limit": 10
  }'`,
  },
]

const rateLimits = [
  { plan: "Free", requests: "100/hour", burst: "10/minute" },
  { plan: "Starter", requests: "1,000/hour", burst: "50/minute" },
  { plan: "Professional", requests: "10,000/hour", burst: "200/minute" },
  { plan: "Enterprise", requests: "Unlimited", burst: "1,000/minute" },
]

export default function APIDocumentationPage() {
  const [selectedEndpoint, setSelectedEndpoint] = React.useState(0)
  const [selectedLanguage, setSelectedLanguage] = React.useState("JavaScript")

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
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
                <span className="text-[#FF9900]">API Documentation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Integrate FBA AI Pro's powerful features into your applications with our comprehensive REST API. Access
                product research, market analysis, and optimization tools programmatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white text-lg px-8 py-3">
                  <Key className="h-5 w-5 mr-2" />
                  Get API Key
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-white hover:bg-white hover:text-[#232F3E] text-lg px-8 py-3 bg-transparent"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Interactive Docs
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Quick Start</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running with the FBA AI Pro API in minutes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-[#FF9900]" />
                    1. Get API Key
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sign up for an account and generate your API key from the dashboard.
                  </p>
                  <Button className="w-full bg-[#FF9900] hover:bg-[#E68900] text-white">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-[#FF9900]" />
                    2. Make Request
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Use your API key to authenticate and make your first request.</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono">
                    curl -H "Authorization: Bearer YOUR_KEY"
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#FF9900]" />
                    3. Get Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Receive AI-powered insights and data in JSON format.</p>
                  <div className="bg-gray-900 text-blue-400 p-3 rounded-lg text-sm font-mono">
                    {'{ "products": [...] }'}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive list of available endpoints and their usage.
              </p>
            </motion.div>

            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Collapsible
                    open={selectedEndpoint === index}
                    onOpenChange={() => setSelectedEndpoint(selectedEndpoint === index ? -1 : index)}
                  >
                    <Card className="shadow-lg">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50">
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge
                                className={`${
                                  endpoint.method === "GET"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {endpoint.method}
                              </Badge>
                              <code className="text-lg font-mono">{endpoint.endpoint}</code>
                            </div>
                            <ChevronDown
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                selectedEndpoint === index ? "rotate-180" : ""
                              }`}
                            />
                          </CardTitle>
                          <p className="text-gray-600 text-left">{endpoint.description}</p>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <Tabs defaultValue="parameters" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="parameters">Parameters</TabsTrigger>
                              <TabsTrigger value="response">Response</TabsTrigger>
                              <TabsTrigger value="example">Example</TabsTrigger>
                            </TabsList>

                            <TabsContent value="parameters" className="space-y-4">
                              <div className="space-y-3">
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <div key={paramIndex} className="border rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <code className="font-mono font-semibold">{param.name}</code>
                                      <Badge variant="outline">{param.type}</Badge>
                                      {param.required && <Badge variant="destructive">Required</Badge>}
                                    </div>
                                    <p className="text-gray-600 text-sm">{param.description}</p>
                                  </div>
                                ))}
                              </div>
                            </TabsContent>

                            <TabsContent value="response" className="space-y-4">
                              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                <pre className="text-sm">
                                  <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                                </pre>
                              </div>
                            </TabsContent>

                            <TabsContent value="example" className="space-y-4">
                              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto relative">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="absolute top-2 right-2 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                                  onClick={() =>
                                    copyToClipboard(`curl -X ${endpoint.method} "${endpoint.endpoint}"
  -H "Authorization: Bearer your-api-key-here"
  -H "Content-Type: application/json"`)
                                  }
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <pre className="text-sm">
                                  <code>{`curl -X ${endpoint.method} "${endpoint.endpoint}"
  -H "Authorization: Bearer your-api-key-here"
  -H "Content-Type: application/json"`}</code>
                                </pre>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDK Examples */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">SDK Examples</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use our official SDKs to integrate with your favorite programming language.
              </p>
            </motion.div>

            <Card className="shadow-lg">
              <CardContent className="p-0">
                <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <div className="border-b">
                    <TabsList className="w-full justify-start rounded-none bg-transparent">
                      {sdkExamples.map((example) => (
                        <TabsTrigger
                          key={example.language}
                          value={example.language}
                          className="data-[state=active]:bg-[#FF9900] data-[state=active]:text-white"
                        >
                          {example.language}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  {sdkExamples.map((example) => (
                    <TabsContent key={example.language} value={example.language} className="m-0">
                      <div className="bg-gray-900 text-gray-100 p-6 relative">
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-4 right-4 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                          onClick={() => copyToClipboard(example.code)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="text-sm overflow-x-auto">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Rate Limits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                API usage limits by subscription plan to ensure optimal performance for all users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rateLimits.map((limit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="shadow-lg text-center">
                    <CardHeader>
                      <CardTitle className="text-[#232F3E]">{limit.plan}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold text-[#FF9900]">{limit.requests}</div>
                          <div className="text-sm text-gray-600">Requests per hour</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-gray-700">{limit.burst}</div>
                          <div className="text-sm text-gray-600">Burst limit</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#232F3E] mb-6">Authentication</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Secure your API requests with Bearer token authentication.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#FF9900]" />
                    API Key Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Include your API key in the Authorization header of every request:
                  </p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                    <code className="text-sm">Authorization: Bearer your-api-key-here</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-[#FF9900]" />
                    Getting Your API Key
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Generate and manage your API keys from your account dashboard:</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 mb-4">
                    <li>Log in to your FBA AI Pro account</li>
                    <li>Navigate to Settings → API Keys</li>
                    <li>Click "Generate New Key"</li>
                    <li>Copy and securely store your key</li>
                  </ol>
                  <Button className="w-full bg-[#FF9900] hover:bg-[#E68900] text-white">Go to Dashboard</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#232F3E] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">
                Ready to <span className="text-[#FF9900]">Start Building?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get your API key and start integrating FBA AI Pro's powerful features into your applications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FF9900] hover:bg-[#E68900] text-white text-lg px-8 py-3">
                  <Key className="h-5 w-5 mr-2" />
                  Get API Key
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-white hover:bg-white hover:text-[#232F3E] text-lg px-8 py-3 bg-transparent"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Examples
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
