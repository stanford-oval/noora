import { createClient } from "@/utils/supabase/server";
import Logout from "../_components/Logout";
import protectRoute from "@/utils/supabase/protectRoute";

async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  await protectRoute();

  return (<div>
    <code>
      {JSON.stringify(data, null, 2)}
    </code>
    <hr className="my-2" />
    <Logout />
  </div>);
}

export default Dashboard;