import { createClient } from "@/lib/utils/supabase/server";
import Logout from "../_components/Logout";
import protectRoute from "@/lib/utils/supabase/protectRoute";
import DeleteAccount from "../_components/DeleteAccount";

async function Dashboard() {
  await protectRoute();

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (<div>
    <code>
      {JSON.stringify(data, null, 2)}
    </code>
    <hr className="my-2" />
    <div className="horizontal space-x-2">
      <Logout />
      <DeleteAccount />
    </div>
  </div>);
}

export default Dashboard;