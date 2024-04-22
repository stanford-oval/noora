import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex vertical center-v">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-noora-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="serif rounded-full bg-noora-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-noora-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noora-primary"
            >
              Go back home &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
