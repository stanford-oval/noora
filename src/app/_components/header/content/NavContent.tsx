import { HomeIcon, PencilIcon } from "@heroicons/react/20/solid";
import DesktopNav from "./desktop/NavContent";
import MobileNav from "./mobile/NavContent";

function NavContent() {
  const items = [
    { name: "Dashboard", href: "/dashboard", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "Practice", href: "/practice", icon: <PencilIcon className="h-5 w-5" /> },
  ]

  return (<div className="flex h-full">
    <div className="hidden md:flex">
      <DesktopNav items={items} />
    </div>
    <div className="md:hidden">
      <MobileNav items={items} />
    </div>
  </div>)
}

export default NavContent;