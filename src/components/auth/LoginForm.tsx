"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border-slate-200">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-[#232F3E]">Welcome back</h1>
                <p className="text-balance text-slate-600">Access your AI-powered FBA dashboard</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[#232F3E] font-medium">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required className="border-slate-300 focus:border-[#FF9900] focus:ring-[#FF9900]" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-[#232F3E] font-medium">Password</Label>
                  <a href="/forgot-password" className="ml-auto text-sm text-[#FF9900] hover:text-[#e88900] underline-offset-2 hover:underline">Forgot your password?</a>
                </div>
                <Input id="password" type="password" required className="border-slate-300 focus:border-[#FF9900] focus:ring-[#FF9900]" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full bg-[#FF9900] hover:bg-[#e88900] text-white font-medium">Login</Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-slate-300">
                <span className="relative z-10 bg-white px-2 text-slate-500">Or continue with</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" type="button" className="w-full border-slate-300 hover:border-[#FF9900] hover:bg-orange-50 bg-transparent">
                  <span className="sr-only">Login with Apple</span>
                  
                </Button>
                <Button variant="outline" type="button" className="w-full border-slate-300 hover:border-[#FF9900] hover:bg-orange-50 bg-transparent">
                  <span className="sr-only">Login with Google</span>
                  G
                </Button>
                <Button variant="outline" type="button" className="w-full border-slate-300 hover:border-[#FF9900] hover:bg-orange-50 bg-transparent">
                  <span className="sr-only">Login with Meta</span>
                  f
                </Button>
              </div>
              <div className="text-center text-sm text-slate-600">
                Don&apos;t have an account? <a href="/signup" className="text-[#FF9900] hover:text-[#e88900] underline underline-offset-4">Sign up</a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-gradient-to-br from-[#FF9900] to-[#e88900] md:block">
            <img src="/ai-dashboard-analytics-charts-and-amazon-fba-selle.jpg" alt="AI-powered FBA analytics dashboard" className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4">AI-Powered FBA Success</h2>
                <p className="text-lg opacity-90">Optimize your Amazon business with intelligent insights and automation</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-slate-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#FF9900]">
        By clicking continue, you agree to our <a href="#" className="text-[#FF9900] hover:text-[#e88900]">Terms of Service</a> and <a href="#" className="text-[#FF9900] hover:text-[#e88900]">Privacy Policy</a>.
      </div>
    </div>
  );
}
