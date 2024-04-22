"use client"

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container pt-12 pb-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div>
          <h1 className="text-center mx-auto font-bold tracking-tight text-lg text-gray-500">
            N O O R A
          </h1>
        </div>
        <div className="max-w-2xl mt-8 mx-auto">
          <p className="text-center text-sm leading-5 text-gray-500">
            Noora is part of a joint research project between
            <a
              href="https://oval.cs.stanford.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-gray-600 trans-150"
            >
              {" "}Stanford's Open Virtual Assistant Lab{" "}
            </a>
            and
            <a
              href="https://profiles.stanford.edu/lynn-koegel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-gray-600 trans-150"
            >
              {" "}Dr. Lynn Kern Koegel{" "}
            </a>
            from Stanford's Dept. of Psychiatry and Behavioral Sciences.
          </p>
        </div>
        <div className="mt-9 text-center text-base text-gray-500">
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
