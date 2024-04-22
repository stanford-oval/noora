"use client"

import Image from "next/image";

const routes = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Practice', href: '/practice' },
  { name: 'Login', href: '/login' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container pt-12 pb-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {routes.map((r: any) => {
            if (r.href)
              return (
                <div key={r.name} className="px-5 py-2">
                  <a
                    href={r.href}
                    className="text-base text-gray-500 hover:text-gray-600"
                  >
                    {r.name}
                  </a>
                </div>
              );
          })}
        </nav>

        <p className="mt-8 text-center text-base text-gray-700">
          Noora is part of a research project at Stanford University&apos;s{" "}
          <a
            href="https://oval.cs.stanford.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-noora-secondary trans-150"
          >
            Open Virtual Assistant Lab
          </a>
          .
        </p>
        <div className="mt-10 pb-2 text-center text-base text-gray-700">
          <a
            href="https://vercel.com/?utm_source=[stanford-oval]&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/img/logos/vercel/powered-by.svg" className="mx-auto" height={29} width={150} alt="Powered by Vercel" />
          </a>
        </div>
      </div>
    </footer>
  );
}
