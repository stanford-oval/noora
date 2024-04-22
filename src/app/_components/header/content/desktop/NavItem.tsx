import React from "react";
import Link from "next/link";
import { clsx } from 'clsx';
import { usePathname } from "next/navigation";

// standard link on nav bar (e.g., Dashboard, Practice)

export default function NavItem({
  name,
  href,
  icon
}: {
  name: string;
  href: string;
  icon?: React.ReactNode;
}) {
  const active = usePathname() === href;

  return (
    <Link href={href}>
      <div
        className={clsx(
          "h-full inline-flex items-center px-1 pt-1 border-b-4 text-lg font-medium trans-300",
          active ? "border-noora-primary text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
        )}
      >
        {icon ? <div className="flex items-center">
          <div style={{ marginBottom: "2px" }}>{icon}</div>
          <div className="ml-2">{name}</div>
        </div> :
          <div>{name}</div>}
      </div>
    </Link>
  );
}