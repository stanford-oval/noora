import routes from "@/data/routes";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

function NavContent({ items }: { items: { name: string, href: string, icon?: React.ReactNode }[] }) {
  const currPath = usePathname();

  return (<div className="-ml-2 mr-2 flex items-center">
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
                  <NavItem
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
  </div>);
}

export default NavContent;