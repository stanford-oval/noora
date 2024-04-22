import protectRoute from "@/lib/utils/supabase/protectRoute";

/**
 * The general flow here is:
 * 1. Check params if sessionId is present
 * 2. If not, ask user to pick a module to practice
 * 3. If yes, fetch the session and resume the practice
 */
async function Practice() {
  await protectRoute();

  return <div className="min-h-screen vertical center-v center-h serif">Still working on this...</div>
}

export default Practice;