import { SuccessMessage } from "@/components/success-message"

export default function PasswordResetSentPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-slate-50 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SuccessMessage
          title="Reset link sent!"
          message="We've sent a password reset link to your email. Check your inbox and follow the instructions to reset your password."
          buttonText="Back to Login"
          buttonHref="/login"
        />
      </div>
    </div>
  )
}
