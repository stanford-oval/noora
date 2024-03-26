import { signup } from "@/lib/utils/supabase/auth/actions";

function SignUp() {
  return <div>
    <form className="vertical space-y-2">
      <h1>SIGN UP</h1>
      <div>
        <label htmlFor="firstname">First name:</label>
        <input id="firstname" name="firstname" type="text" required />
      </div>
      <div>
        <label htmlFor="lastname">Last name:</label>
        <input id="lastname" name="lastname" type="text" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password1">Password:</label>
        <input id="password1" name="password" type="password" required />
      </div>
      <div>
        <button formAction={signup}>Sign up</button>
      </div>
    </form>
  </div>;
}

export default SignUp;