"use client"

import HomeLogo from "./HomeLogo";
import NavContent from "./content/NavContent";

export default function Header() {

  return (
    <nav className="z-20 w-screen bg-white shadow fixed">
      <div className="container">
        {/* outer wrapper to separate home logo (left end) and content (right end) */}
        <div className="flex justify-between h-16 items-center">
          <HomeLogo />
          <NavContent />
        </div>
      </div>
    </nav>
  );
}
