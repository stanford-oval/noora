"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

/**
 * Force user to login before accessing the route.
 */
export default async function protectRoute() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }
}
