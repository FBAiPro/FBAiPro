import { EmailVerificationForm } from "@/components/email-verification-form"

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-slate-50 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <EmailVerificationForm />
      </div>
    </div>
  )
}
