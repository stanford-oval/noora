import Link from 'next/link'
import { login } from '../../../utils/supabase/actions'
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Login() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/dashboard");
  }


  return (
    <form className="vertical space-y-2">
      <h1>LOG IN</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
      </div>
      <div>
        <button formAction={login}>Log in</button>
      </div>
      <div>
        Don't have an account? Sign up <Link href="/signup">here</Link>
      </div>
    </form>
  )
}