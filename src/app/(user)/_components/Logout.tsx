"use client";

import { signout } from "@/utils/supabase/actions";
import { createClient } from "@/utils/supabase/client";

function Logout() {
  return <button onClick={() => {
    signout();
  }}>
    Log out
  </button>
}

export default Logout;