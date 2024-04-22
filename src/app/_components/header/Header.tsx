"use client"

import React from "react";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import MobileNavItem from "./MobileNavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import routes from "@/data/routes";

export default function Header() {
  // this is  aserver component, so can't use window object
  const currPath = "/"; //window.location.pathname;
  return (
    <nav className="z-40 w-screen bg-white shadow fixed">
      <div className="container">
        <div className="flex justify-between h-16">
          <Link href="/">
            <div className="flex-shrink-0 flex items-center">
              {/* <Image
                className="block h-12 w-auto mr-1"
                src="/img/logos/noora/lamp.png"
                alt="Noora logo"
              /> */}
              <span className="font-bold tracking-wide text-xl text-noora-primary">
                NOORA
              </span>
            </div>
          </Link>
          <div className="flex">
            {/* desktop navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-6 lg:space-x-8">
              {routes.map((r: any) => (
                <NavItem
                  key={r.name}
                  name={r.name}
                  href={r.href}
                  currPath={currPath}
                  dropRoutes={r.dropRoutes}
                  active={
                    r.href !== "/"
                      ? currPath.startsWith(r.href)
                      : r.href == currPath
                  }
                />
              ))}
              {/* <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/modules">
                    <div
                      type="button"
                      className="trans-300 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-noora-primary shadow-sm hover:bg-noora-primary-dark"
                    >
                      <FontAwesomeIcon
                        icon={faComment}
                        className="-ml-1 mr-2 h-3 w-3"
                      />
                      <span>Get Started</span>
                    </div>
                  </Link>
                </div>
              </div> */}
            </div>
            {/* mobile navigation */}
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="toggle inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                      {open ? (
                        <XMarkIcon className="h-6 w-6" />
                      ) : (
                        <Bars3Icon className="h-6 w-6" />
                      )}
                    </Disclosure.Button>

                    <Disclosure.Panel className="absolute top-16 left-0 w-screen bg-white">
                      <div className={`${open ? "block" : "hidden"} lg:hidden`}>
                        <div className="pb-2 space-y-1 shadow-md">
                          {routes.map((r: any) => (
                            <MobileNavItem
                              key={r.name}
                              name={r.name}
                              href={r.href}
                              dropRoutes={r.dropRoutes}
                              currPath={currPath}
                              active={
                                r.href !== "/"
                                  ? currPath.startsWith(r.href)
                                  : r.href == currPath
                              }
                            />
                          ))}
                          {/* <div className="flex items-center mx-4 py-1">
                            <Link href="/modules">
                              <div className="justify-center w-full inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded-full text-white bg-noora-primary shadow-sm hover:bg-noora-primary-dark">
                                <FontAwesomeIcon
                                  icon={faComment}
                                  className="-ml-1 mr-2 h-3 w-3"
                                />
                                <span>Get Started</span>
                              </div>
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
