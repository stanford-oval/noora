import protectRoute from "@/lib/utils/supabase/protectRoute";

async function Practice() {
  await protectRoute();

  return <div>Practice</div>
}

export default Practice;