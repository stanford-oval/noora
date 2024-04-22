import React from "react";
import { clsx } from 'clsx';
import NavItemDrop from './NavItemDrop';
import Link from "next/link";

export default function NavItem({
  name,
  href,
  active,
  currPath,
  dropRoutes,
}: NavItemProps) {
  const activeStyles = "border-noora-primary text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = clsx("h-full trans-300 inline-flex items-center cursor-pointer px-1 pt-1 border-b-4 text-lg font-medium", active ? activeStyles : defaultStyles);


  if (dropRoutes)
    return (
      <NavItemDrop
        itemStyle={navItemStyle}
        href={href}
        name={name}
        dropRoutes={dropRoutes}
        currPath={currPath}
      />
    );

  if (href == null) return <div className={navItemStyle}>{name}</div>;

  return (
    <Link href={href}>
      <div
        className={navItemStyle}
      >
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
