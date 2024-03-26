"use client";

import { deleteAccount } from "@/lib/utils/supabase/auth/actions";

function DeleteAccount() {
  return <button onClick={() => {
    deleteAccount();
  }}>
    Delete account
  </button>
}

export default DeleteAccount;