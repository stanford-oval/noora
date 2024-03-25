"use client";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

function Logout() {
  const supabase = createClient()
  return <button onClick={() => {
    console.log("Logging out")
    supabase.auth.signOut()
    redirect('/')
  }}>
    Log out
  </button>
}

export default Logout;