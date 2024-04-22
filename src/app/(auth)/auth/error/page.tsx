import Link from "next/link";

export default function ErrorPage() {
  return <div className="h-screen py-12 flex flex-col justify-center">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="vertical space-y-2 text-center text-gray-500">
        <div>We couldn't sign you in. Did you use the right password?</div>
        <Link href="/login" className="font-semibold leading-6 text-noora-primary hover:text-noora-primary-dark">
          Back to login
        </Link>
      </div>
    </div>
  </div>
}