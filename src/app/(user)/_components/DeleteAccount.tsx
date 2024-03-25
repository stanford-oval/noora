"use client";

import { deleteAccount } from "@/utils/supabase/actions";

function DeleteAccount() {
  return <button onClick={() => {
    deleteAccount();
  }}>
    Delete account
  </button>
}

export default DeleteAccount;