import { createClient } from "./supabase/server";

/**
 * Create a user in the public.users table if they don't already exist.
 */
const createUserRow = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw error;
  }
  if (!data) {
    throw new Error("User not found");
  }
  // get first name and last name from metadata
  const { id, user_metadata } = data.user;
  const { data: users, error: usersError } = await supabase
    .from("users")
    .select()
    .eq("id", id);
  if (usersError) {
    throw usersError;
  }

  if (users.length === 0) {
    console.log("User not found in users table, creating row...");
    const { first_name, last_name } = user_metadata;
    const { error: insertError } = await supabase.from("users").insert([
      {
        id,
        first_name: first_name.trim(),
        last_name: last_name.trim(),
      },
    ]);
    if (insertError) {
      throw insertError;
    }

    console.log("User row created successfully");
  } else {
    console.log("User row already exists:", users[0]);
  }
};

export { createUserRow };
