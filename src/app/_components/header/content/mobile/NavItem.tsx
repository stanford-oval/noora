import React, { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function NavItem({
  name,
  href,
  active,
  currPath,
  dropRoutes,
}: NavItemProps) {
  const [expanded, setExpanded] = useState(active); // for collapsable
  const toggle = () => setExpanded(!expanded);

  const activeStyles = "bg-indigo-50 border-noora-primary text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `serif trans-150 flex justify-items-stretch items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ${(dropRoutes && active && !expanded) || (!dropRoutes && active)
    ? activeStyles
    : defaultStyles
    }`;

  if (dropRoutes) {
    return (
      <>
        <div onClick={toggle} className={navItemStyle}>
          {name}
          <ChevronDownIcon
            className={clsx(
              "trans-150 ml-auto h-5 w-5 mr-4 inline-block",
              expanded ? "transform rotate-180" : "transform rotate-0"
            )}
          />
        </div>

        <div className={expanded ? "block" : "hidden"}>
          {dropRoutes.map((r: any) => {
            if (!r.href && !r.href.includes("http"))
              r.href = href + r.href;
            return (
              <NestedItem
                key={r.href}
                href={r.href}
                name={r.name}
                active={r.href == currPath}
              />
            );
          })}
        </div>
      </>
    );
  }

  return (
    <Link href={href}>
      <div className={navItemStyle} onClick={() => { if (active) window.location.replace(location.pathname); }}>{name}</div>
    </Link>
  );
}

function NestedItem({ href, name, active }: NestedItemProps) {
  const activeStyles = "bg-indigo-50 border-noora-primary text-green-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `trans-300 block pl-8 pr-4 py-2 border-l-4 text-base font-medium sm:pr-6 ${active ? activeStyles : defaultStyles
    }`;

  return (
    <Link href={href}>
      <div className={navItemStyle} role="menuitem">
        {name}
      </div>
    </Link>
  );
}

type NavItemProps = {
  name: string;
  href: string;
  active: boolean;
  currPath: string;
  dropRoutes?: any;
};

type NestedItemProps = {
  href: string;
  name: string;
  active: boolean;
};
