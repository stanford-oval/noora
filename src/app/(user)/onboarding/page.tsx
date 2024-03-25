import Link from "next/link";

function Onboarding() {
  return <div>
    <h1>Welcome to Noora</h1>
    <p>Head on over to <Link href="/dashboard">your dashboard</Link> to get started.</p>
  </div>;
}

export default Onboarding;