import { signup } from "@/utils/supabase/actions";

function SignUp() {
  return <div>
    <form className="vertical space-y-2">
      <h1>SIGN UP</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
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
        <label htmlFor="password2">Confirm password:</label>
        <input id="password2" name="password" type="password" required />
      </div>
      <div>
        <button formAction={signup}>Sign up</button>
      </div>
    </form>
  </div>;
}

export default SignUp;