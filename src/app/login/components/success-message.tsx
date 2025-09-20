import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface SuccessMessageProps extends React.ComponentProps<"div"> {
  title: string
  message: string
  buttonText: string
  buttonHref: string
}

export function SuccessMessage({ className, title, message, buttonText, buttonHref, ...props }: SuccessMessageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border-slate-200">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-[#232F3E]">{title}</h1>
                <p className="text-balance text-slate-600">{message}</p>
              </div>
              <Button asChild className="w-full bg-[#FF9900] hover:bg-[#e88900] text-white font-medium">
                <a href={buttonHref}>{buttonText}</a>
              </Button>
            </div>
          </div>
          <div className="relative hidden bg-gradient-to-br from-[#FF9900] to-[#e88900] md:block">
            <img
              src="/ai-dashboard-analytics-charts-and-amazon-fba-selle.jpg"
              alt="AI-powered FBA analytics dashboard"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Welcome to FBA AI</h2>
                <p className="text-lg opacity-90">Your AI-powered Amazon FBA journey starts now</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
