import { createClient } from "@/lib/utils/supabase/server";
import Logout from "../_components/Logout";
import protectRoute from "@/lib/utils/supabase/protectRoute";
import DeleteAccount from "../_components/DeleteAccount";
import { getUser } from "@/lib/utils/user";
import Link from "next/link";

async function Dashboard() {
  await protectRoute();

  const { authUser, user } = await getUser();

  return (<div>
    <h1>Hey {user.first_name}!</h1>
    <p>Your email is {authUser.email} and your user id is {user.id}.</p>
    <Link href="/practice"><button className="primary">Go to Practice page</button></Link>

    <hr className="my-2" />
    <div className="horizontal space-x-2">
      <Logout />
      <DeleteAccount />
    </div>
  </div>);
}

export default Dashboard;