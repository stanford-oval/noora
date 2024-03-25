import protectRoute from "@/utils/supabase/protectRoute";

async function Practice() {
  await protectRoute();

  return <div>Practice</div>
}

export default Practice;