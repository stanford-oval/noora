"use client"

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container pt-12 pb-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-500">
          Noora is part of a research project at Stanford University&apos;s{" "}
          <a
            href="https://oval.cs.stanford.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-gray-600 trans-150"
          >
            Open Virtual Assistant Lab
          </a>
          .
        </p>
        <div className="mt-8 text-center text-base text-gray-500">
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
