"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, ShoppingCart, BarChart3, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const mainMenuItems = [
  { name: "Product Research", href: "/product-research", icon: Search },
  { name: "Market Analysis", href: "/market-analysis", icon: BarChart3 },
  { name: "Listing Optimization", href: "/listing-optimization", icon: ShoppingCart },
  { name: "Profit Calculator", href: "/profit-calculator", icon: Calculator },
]

const companyMenuItems = [
  { name: "About Us", href: "/about" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <div className="bg-[#FF9900] rounded-lg p-2">
        <ShoppingCart className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold text-[#232F3E]">FBA AI Pro</span>
    </Link>
  )
}

export function Header() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

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
            "mx-auto mt-1 max-w-7xl px-4 transition-all duration-300 lg:px-8",
            isScrolled && "bg-white/95 max-w-6xl rounded-2xl border border-gray-200 backdrop-blur-lg shadow-lg lg:px-4",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-0">
            <div className="flex w-full justify-between lg:w-auto">
              <Logo />

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {mainMenuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-gray-600 hover:text-[#FF9900] block duration-150 font-medium",
                        pathname === item.href && "text-[#FF9900]",
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
                <li className="relative group">
                  <button className="text-gray-600 hover:text-[#FF9900] duration-150 font-medium">More</button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {companyMenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#FF9900] hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {[...mainMenuItems, ...companyMenuItems].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-gray-600 hover:text-[#FF9900] block duration-150",
                          pathname === item.href && "text-[#FF9900]",
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    isScrolled && "lg:hidden",
                    "border-gray-300 text-gray-600 hover:text-[#FF9900] hover:border-[#FF9900]",
                  )}
                >
                  <span>Sign In</span>
                </Button>
                <Button
                  size="sm"
                  className={cn(
                    isScrolled
                      ? "lg:inline-flex bg-[#FF9900] hover:bg-[#E68900] text-white"
                      : "hidden bg-[#FF9900] hover:bg-[#E68900] text-white",
                  )}
                >
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
