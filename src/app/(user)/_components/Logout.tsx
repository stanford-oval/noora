"use client";

import { signout } from "@/utils/supabase/actions";

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