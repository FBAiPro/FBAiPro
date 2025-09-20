import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, ArrowLeft } from "lucide-react"

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border-slate-200">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-[#FF9900] hover:text-[#e88900] hover:bg-transparent"
                  asChild
                >
                  <a href="/login">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to login
                  </a>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#FF9900] rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-[#232F3E]">Reset your password</h1>
                <p className="text-balance text-slate-600">Enter your new password below to secure your account</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-[#232F3E] font-medium">
                  New Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="border-slate-300 focus:border-[#FF9900] focus:ring-[#FF9900]"
                />
                <p className="text-xs text-slate-500">Must be at least 8 characters long</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password" className="text-[#232F3E] font-medium">
                  Confirm New Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  className="border-slate-300 focus:border-[#FF9900] focus:ring-[#FF9900]"
                />
              </div>
              <Button type="submit" className="w-full bg-[#FF9900] hover:bg-[#e88900] text-white font-medium">
                Reset Password
              </Button>
              <div className="text-center text-sm text-slate-600">
                Remember your password?{" "}
                <a href="/login" className="text-[#FF9900] hover:text-[#e88900] underline underline-offset-4">
                  Sign in
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-gradient-to-br from-[#FF9900] to-[#e88900] md:block">
            <img
              src="/ai-dashboard-analytics-charts-and-amazon-fba-selle.jpg"
              alt="AI-powered FBA analytics dashboard"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Secure Your Account</h2>
                <p className="text-lg opacity-90">
                  Create a strong password to protect your FBA business data and insights
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
