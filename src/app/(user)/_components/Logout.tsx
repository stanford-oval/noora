"use client";

import { signout } from "@/lib/utils/supabase/auth/actions";

function Logout() {
  return <span className="serif inline-block text-red-800 cursor-pointer" onClick={
    () => {
      signout();
    }
  }>
    Sign out?
  </span>
}

export default Logout;