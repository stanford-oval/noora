"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

/**
 * Force user to login before accessing the route.
 * @param {boolean} adminOnly - If true, only allow users with isAdmin flag set to true.
 */
export default async function protectRoute(adminOnly = false) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  console.log("protectRoute", data, error);

  if (error || !data?.user) {
    redirect("/login");
  }

  if (adminOnly) {
    // pull data from the users table and check if isAdmin is true
    const { data: usersData, error: usersError } = await supabase
      .from("users")
      .select("isAdmin")
      .eq("id", data.user.id)
      .single();

    if (usersError || !usersData?.isAdmin) {
      redirect("/login");
    }
  }
}
