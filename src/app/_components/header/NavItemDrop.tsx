import React from "react";
import { Popover } from "@headlessui/react";

import Link from "next/link";
import { clsx } from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function NavItemDrop({
  name,
  href,
  dropRoutes,
  itemStyle,
  currPath,
}: NavItemDropProps) {
  return (
    <Popover className="h-full relative">
      <Popover.Button className={clsx(itemStyle, "h-full")}>
        {name}{" "}
        <ChevronDownIcon className="h-5 w-5 ml-2 inline-block" />
      </Popover.Button>

      <Popover.Panel className="-mt-1 right-0 w-52 absolute z-10 bg-white shadow">
        <div className="flex flex-col">
          {dropRoutes.map((r: any) => {
            return (
              <DropdownItem
                key={r.href}
                href={r.href}
                name={r.name}
                active={r.href.split("?")[0] == currPath.split("?")[0]}
              />
            );
          })}
        </div>
      </Popover.Panel>
    </Popover>
  );
}

function DropdownItem({ href, name, active }: any) {
  const activeStyles = "bg-gray-100 border-noora-primary text-gray-900";
  const defaultStyles =
    "border-transparent w-full text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pr-10";
  const navItemStyle = `trans-300 block px-4 py-2 text-lg border-l-4 text-base font-medium ${active ? activeStyles : defaultStyles
    }`;

  return (
    <Link href={href}>
      <a className={navItemStyle} role="menuitem">
        {name}
      </a>
    </Link>
  );
}

type NavItemDropProps = {
  name: string;
  href: string;
  dropRoutes: any[];
  itemStyle: string;
  currPath: string;
};
