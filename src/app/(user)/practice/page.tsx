import protectRoute from "@/lib/utils/supabase/protectRoute";

/**
 * The general flow here is:
 * 1. Check params if sessionId is present
 * 2. If not, ask user to pick a module to practice
 * 3. If yes, fetch the session and resume the practice
 */
async function Practice() {
  await protectRoute();

  return <div>Practice</div>
}

export default Practice;