'use client'

import { useSearchParams } from 'next/navigation'
import Link from "next/link";

export default function ErrorPage() {
  const searchParams = useSearchParams()

  const errorType = searchParams.get('type')

  const masonsEmail = <a href="mailto:masonjwang@stanford.edu" className="underline hover:text-gray-600 trans-150">masonjwang@stanford.edu</a>

  let header = "Unknown error occurred"
  let message = <>We're very sorry for the inconvenience. If this issue persists, please contact {masonsEmail} with what you were doing before this error page displayed.</>

  if (errorType == "wrong-credentials") {
    header = "Incorrect email or password"
    message = <>Please double-check your email and password and try again. If you're having trouble, please contact {masonsEmail}.</>
  }

  return <div className="min-h-screen flex vertical center-v">
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 max-w-2xl mx-auto">
      <div className="text-center">
        <p className="text-base font-semibold text-noora-primary">Oops, something went wrong!</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{header}</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">{message}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/login"
            className="serif rounded-full bg-noora-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-noora-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noora-primary"
          >
            Back to login &rarr;
          </Link>
        </div>
      </div>
    </main>
  </div>
}