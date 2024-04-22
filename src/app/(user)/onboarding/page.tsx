import Link from "next/link";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex vertical center-v">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-base font-semibold text-noora-primary">Account created successfully!</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Welcome to Noora</h1>
          <p className="mt-6 text-base leading-7 text-gray">Let's get you started. Noora helps you practice challenging aspects of social conversation, such as responding empathetically and positively to others.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/practice"
              className="serif rounded-full bg-noora-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-noora-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noora-primary"
            >
              Start practicing &rarr;
            </Link>
            <Link
              href="/dashboard"
              className="serif  px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noora-primary"
            >
              See your dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
