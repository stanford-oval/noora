"use client";

import { signout } from "@/lib/utils/supabase/auth/actions";

function Logout() {
  return <button onClick={
    () => {
      signout();
    }
  }>
    Log out
  </button>
}

export default Logout;