import Link from "next/link"
import { ShoppingCart, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="bg-[#FF9900] rounded-lg p-2">
        <ShoppingCart className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold text-[#232F3E]">FBA AI Pro</span>
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#232F3E] text-white">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="bg-[#FF9900] rounded-lg p-2">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FBA AI Pro</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              The most intelligent Amazon FBA platform. Leverage AI for product research, market analysis, and profit
              optimization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI Tools */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">AI Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/product-research" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Product Research
                </Link>
              </li>
              <li>
                <Link href="/market-analysis" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="/listing-optimization" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Listing Optimization
                </Link>
              </li>
              <li>
                <Link href="/profit-calculator" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Profit Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help-center" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/api-documentation" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-300">© 2024 FBA AI Pro. All rights reserved.</div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                Terms of Service
              </Link>
              <Link href="/help-center" className="text-gray-300 hover:text-[#FF9900] transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
