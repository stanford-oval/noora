import { createClient } from "./supabase/server";

/**
 * Gets both the user object from the auth table and the user row from the users table.
 * @returns {Promise<{authUser: any, user: any}>}
 */
const getUser = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw error;
  }
  if (!data) {
    throw new Error("User not found");
  }
  const { id } = data.user;
  const { data: users, error: usersError } = await supabase
    .from("users")
    .select()
    .eq("id", id);
  if (usersError) {
    throw usersError;
  }
  if (users.length === 0) {
    throw new Error("User row not found");
  }
  return { authUser: data.user, user: users[0] };
};

export { getUser };
