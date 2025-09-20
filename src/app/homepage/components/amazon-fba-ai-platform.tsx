"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import {
  ArrowRight,
  Menu,
  X,
  Search,
  TrendingUp,
  Brain,
  Zap,
  Target,
  BarChart3,
  Star,
  CheckCircle,
  Play,
  Users,
  Sparkles,
  Bot,
  Eye,
  MessageSquare,
  Shield,
} from "lucide-react"
import { motion, type Variants } from "framer-motion"

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
CardContent.displayName = "CardContent"

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function AnimatedGroup({
  children,
  className,
  variants,
}: {
  children: React.ReactNode
  className?: string
  variants?: {
    container?: Variants
    item?: Variants
  }
}) {
  const containerVariants = variants?.container || defaultContainerVariants
  const itemVariants = variants?.item || defaultItemVariants

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className={cn(className)}>
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const menuItems = [
  { name: "Product Research", href: "#research" },
  { name: "Market Analysis", href: "#analysis" },
  { name: "Listing Optimization", href: "#optimization" },
  { name: "Resources", href: "#resources" },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full px-2 group">
        <div
          className={cn(
            "mx-auto mt-1 max-w-6xl px-4 transition-all duration-300 lg:px-8",
            isScrolled && "bg-background/95 max-w-5xl rounded-2xl border backdrop-blur-lg lg:px-4",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-0">
            <div className="flex w-full justify-between lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary block duration-150 font-medium"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary block duration-150 font-medium"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button variant="outline" size="sm" className={cn(isScrolled && "lg:hidden")}>
                  <span>Sign In</span>
                </Button>
                <Button size="sm" className={cn(isScrolled ? "lg:inline-flex" : "hidden")}>
                  <span>Start Free Trial</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="bg-primary rounded-lg p-2">
        <Bot className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        FBA<span className="text-primary">AI</span>
      </span>
    </div>
  )
}

// Interactive AI Command Center Component
const AICommandCenter = () => {
  const [activeDemo, setActiveDemo] = React.useState("research")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isAnalyzing, setIsAnalyzing] = React.useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    setIsAnalyzing(true)
    setTimeout(() => setIsAnalyzing(false), 2000)
  }

  const demoResults = {
    research: {
      title: "Wireless Bluetooth Headphones",
      competition: "Medium",
      demand: "High",
      profitability: "87%",
      trend: "+23%",
    },
    analysis: {
      marketSize: "$2.4B",
      growth: "+15.3%",
      topKeywords: ["wireless", "bluetooth", "noise cancelling"],
      seasonality: "Stable year-round",
    },
  }

  return (
    <div className="bg-card rounded-xl border p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 rounded-lg p-2">
          <Brain className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">AI Command Center</h3>
          <p className="text-sm text-muted-foreground">Try our AI-powered analysis tools</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Enter product name or ASIN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <Button onClick={handleSearch} disabled={isAnalyzing}>
            {isAnalyzing ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              "Analyze"
            )}
          </Button>
        </div>

        {(searchQuery || isAnalyzing) && (
          <div className="bg-background rounded-lg p-4 border">
            {isAnalyzing ? (
              <div className="flex items-center gap-3">
                <div className="animate-pulse bg-primary/20 rounded-full h-8 w-8"></div>
                <div className="text-sm text-muted-foreground">AI is analyzing market data...</div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Competition Level</div>
                  <div className="text-lg font-bold text-primary">Medium</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Profit Potential</div>
                  <div className="text-lg font-bold text-green-600">87%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Market Trend</div>
                  <div className="text-lg font-bold text-blue-600">+23%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Demand Level</div>
                  <div className="text-lg font-bold text-primary">High</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Real-time Opportunity Scanner
const OpportunityScanner = () => {
  const [opportunities] = React.useState([
    { product: "Smart Home Security Camera", profit: "$45", competition: "Low", trend: "+18%" },
    { product: "Eco-Friendly Water Bottle", profit: "$23", competition: "Medium", trend: "+12%" },
    { product: "Wireless Phone Charger", profit: "$31", competition: "Low", trend: "+25%" },
  ])

  return (
    <div className="bg-card rounded-xl border p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 rounded-lg p-2">
            <Eye className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Live Opportunities</h3>
            <p className="text-sm text-muted-foreground">Real-time market discoveries</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>

      <div className="space-y-3">
        {opportunities.map((opp, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border">
            <div className="flex-1">
              <div className="font-medium text-sm">{opp.product}</div>
              <div className="text-xs text-muted-foreground">Competition: {opp.competition}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-primary">{opp.profit}</div>
              <div className="text-xs text-green-600">{opp.trend}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AmazonFBAAIPlatform() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-36 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-50/30"></div>
          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="text-center">
              <AnimatedGroup variants={transitionVariants}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <Sparkles className="h-4 w-4" />
                  <span>AI-Powered Amazon FBA Success</span>
                </div>

                <h1 className="max-w-5xl mx-auto text-balance text-5xl md:text-6xl lg:text-7xl font-bold">
                  Unlock Your Amazon FBA Potential with <span className="text-primary">AI Intelligence</span>
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-balance text-xl text-muted-foreground">
                  Transform your Amazon business with data-driven insights, automated product research, and AI-powered
                  listing optimization. Join thousands of sellers maximizing their profits.
                </p>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
              >
                <Button size="lg" className="text-lg px-8 py-3 h-auto">
                  <span>Start Free Trial</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 h-auto bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  <span>Watch Demo</span>
                </Button>
              </AnimatedGroup>

              {/* Trust Indicators */}
              <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>Amazon API Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>10,000+ Active Sellers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Experience AI-Powered <span className="text-primary">FBA Tools</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Try our intelligent platform that analyzes millions of data points to find your next winning product
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <AICommandCenter />
              <OpportunityScanner />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything You Need to <span className="text-primary">Dominate Amazon</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive AI tools designed for serious Amazon FBA sellers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "AI Product Research",
                  description:
                    "Discover profitable products with our advanced AI algorithms that analyze market trends, competition, and demand patterns.",
                },
                {
                  icon: TrendingUp,
                  title: "Market Analysis",
                  description:
                    "Get deep insights into market dynamics, seasonal trends, and competitor strategies to make informed decisions.",
                },
                {
                  icon: Target,
                  title: "Listing Optimization",
                  description:
                    "Optimize your product listings with AI-generated titles, descriptions, and keywords that convert browsers into buyers.",
                },
                {
                  icon: BarChart3,
                  title: "Profit Calculator",
                  description:
                    "Calculate exact profit margins, fees, and ROI with our comprehensive Amazon FBA profit calculator.",
                },
                {
                  icon: Zap,
                  title: "Automated Alerts",
                  description:
                    "Get instant notifications about price changes, new opportunities, and market shifts that affect your business.",
                },
                {
                  icon: Brain,
                  title: "AI Recommendations",
                  description:
                    "Receive personalized product recommendations based on your selling history and market analysis.",
                },
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Success Stories from <span className="text-primary">Real Sellers</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See how our AI platform has transformed Amazon FBA businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "FBA Seller",
                  image: "/professional-woman-smiling.png",
                  revenue: "$50K/month",
                  growth: "300% increase",
                  quote:
                    "FBAAI helped me identify winning products I never would have found on my own. My revenue tripled in just 6 months!",
                },
                {
                  name: "Mike Rodriguez",
                  role: "Amazon Entrepreneur",
                  image: "/professional-man-smiling.png",
                  revenue: "$75K/month",
                  growth: "250% increase",
                  quote:
                    "The AI recommendations are incredibly accurate. I've launched 5 successful products using their insights.",
                },
                {
                  name: "Jennifer Park",
                  role: "E-commerce Expert",
                  image: "/professional-woman-entrepreneur.png",
                  revenue: "$120K/month",
                  growth: "400% increase",
                  quote:
                    "This platform gave me the competitive edge I needed. The market analysis features are game-changing.",
                },
              ].map((story, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{story.revenue}</div>
                      <div className="text-xs text-muted-foreground">Monthly Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{story.growth}</div>
                      <div className="text-xs text-muted-foreground">Growth</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{story.quote}"</p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Amazon Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful sellers using AI to maximize their Amazon FBA profits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 h-auto">
                <span>Start Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 h-auto border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                <span>Talk to Expert</span>
              </Button>
            </div>
            <p className="text-white/80 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl py-16 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-primary rounded-lg p-2">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">
                  FBA<span className="text-primary">AI</span>
                </span>
              </div>
              <p className="text-sm text-background/80 max-w-xs">
                The most advanced AI platform for Amazon FBA sellers. Maximize profits with intelligent automation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Product Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Market Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Listing Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Profit Calculator
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-background/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-background/80">© 2024 FBAAI. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-background/80">
                  <Shield className="h-4 w-4" />
                  <span>Amazon API Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
