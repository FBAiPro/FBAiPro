import { SuccessMessage } from "@/components/success-message"

export default function PasswordResetSuccessPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-slate-50 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SuccessMessage
          title="Password updated!"
          message="Your password has been successfully updated. You can now sign in with your new password."
          buttonText="Sign In"
          buttonHref="/login"
        />
      </div>
    </div>
  )
}
