import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavItem({
  name,
  href,
}: NavItemProps) {
  const active = usePathname() === href;
  const [expanded, setExpanded] = useState(active); // for collapsable
  const toggle = () => setExpanded(!expanded);

  const activeStyles = "bg-indigo-50 border-noora-primary text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `serif trans-150 flex justify-items-stretch items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ${active ? activeStyles : defaultStyles}`;

  return (
    <Link href={href}>
      <div className={navItemStyle} onClick={() => { if (active) window.location.replace(location.pathname); }}>{name}</div>
    </Link>
  );
}

type NavItemProps = {
  name: string;
  href: string;
};