import { createClient } from "@/lib/utils/supabase/server";
import Logout from "../_components/Logout";
import protectRoute from "@/lib/utils/supabase/protectRoute";
import DeleteAccount from "../_components/DeleteAccount";
import { getUser } from "@/lib/utils/user";
import Link from "next/link";

async function Dashboard() {
  await protectRoute();

  const { authUser, user } = await getUser();

  return (<div className="min-h-screen container pt-20">
    <h1 className="text-2xl lg:text-3xl">Welcome back, {user.first_name}!</h1>
    <p className="text-gray-500">You are logged in under {authUser.email}.{" "}<Logout /></p>

    <div className="serif py-12">
      Still working on this page...

    </div>
  </div>);
}

export default Dashboard;