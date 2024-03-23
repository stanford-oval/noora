import { login, signup } from './actions'

export default function Login() {
  return (
    <form className="vertical space-y-2">
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
    </form>
  )
}