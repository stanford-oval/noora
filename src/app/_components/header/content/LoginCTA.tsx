import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function LoginCTA() {
  return <div className="flex items-center">
    <div className="flex-shrink-0">
      <Link href="/login">
        <button
          className="items-center flex space-x-2 trans-300 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-gray-700 bg-gray-300/50 shadow-sm hover:bg-gray-300/80"
        >
          <div>Log in</div> <ArrowRightIcon className="h-4 w-4" />
        </button>
      </Link>
    </div>
  </div>
}

export default LoginCTA;

