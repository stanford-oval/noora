import { createClient } from "@/lib/utils/supabase/server";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="bg-white min-h-screen py-12 vertical center-v">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl ">
          <div className="text-center">
            <h1 className="tracking-tight lg:tracking-normal text-4xl font-bold text-gray-900 sm:text-5xl">
              Improve your <span className="text-noora-primary">social conversation</span> using AI.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              <span className="serif">Noora<sub className="italic">beta</sub></span> is an AI coach who guides you through a diverse set of social scenarios. Sign up to try it out!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup">
                <button className="pulse-button rounded-full outline-none px-6 py-4 flex text text-white bg-noora-primary hover:bg-noora-primary-dark font-medium flex items-center justify-center">
                  <div>Create your account</div>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="pb-10 pt-14 mx-auto vertical center-v center-h">
            <h2 className="mb-3 text-center">
              Developed by{" "}
              <a href="https://oval.cs.stanford.edu" target="_blank" rel="noopener noreferrer"
                className="font-semibold text-[#8C1515]">
                Stanford's Open Virtual Assistant Lab
              </a>
            </h2>
            <div className="flex gap-x-4 justify-center md:justify-start">
              <img
                src="/img/logos/stanford/medicine.png"
                className="h-8 sm:h-9 lg:h-11 w-auto"
                alt="Stanford Medicine"
              />
              <img
                src="/img/logos/stanford/engineering.png"
                className="h-9 sm:h-10 lg:h-12 mt-0.5 w-auto"
                alt="Stanford Engineering"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
