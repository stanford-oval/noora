import Link from "next/link";

function Header() {
  return <div className="text-blue-500">
    <div className="vertical">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/practice">Practice</Link>
      <Link href="/login">Log in</Link>
    </div>
    <hr className="my-4" />
  </div>
}

export default Header;