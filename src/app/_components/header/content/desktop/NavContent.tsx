import NavItem from "./NavItem";

function NavContent({ items }:
  {
    items:
    { name: string, href: string, icon?: React.ReactNode }[]
  }) {
  return <div className="h-full md:ml-6 md:space-x-6 lg:space-x-8">
    {items.map((item, index) => (
      <NavItem key={index} name={item.name} href={item.href} icon={item.icon} />
    ))}
    {/* <div className="flex items-center">
      <div className="flex-shrink-0">
        <Link href="/modules">
          <div
            className="trans-300 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-noora-primary shadow-sm hover:bg-noora-primary-dark"
          >
            <span>Get Started</span>
          </div>
        </Link>
      </div>
    </div> */}
  </div>
}

export default NavContent;