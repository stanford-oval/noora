import { NavItemType } from "../NavContent";
import NavItem from "./NavItem";

function NavContent({ items }:
  {
    items:
    NavItemType[]
  }) {
  return <div className="h-full md:ml-6 md:space-x-6 lg:space-x-8">
    {items.map((item, index) => (
      <NavItem key={index} name={item.name} href={item.href} icon={item.icon} />
    ))}
  </div>
}

export default NavContent;