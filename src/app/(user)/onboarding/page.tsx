import { createUserRow } from "@/lib/utils/onboarding";
import protectRoute from "@/lib/utils/supabase/protectRoute";
import Link from "next/link";

async function Onboarding() {
  await protectRoute();

  await createUserRow();

  return <div>
    <h1>Welcome to Noora</h1>
    <p>Head on over to <Link href="/dashboard">your dashboard</Link> to get started.</p>
  </div>;
}

export default Onboarding;