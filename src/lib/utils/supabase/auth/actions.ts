"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    redirectTo: "/dashboard",
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);
    redirect("/auth/error");
  }

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        first_name: formData.get("firstname") as string,
        last_name: formData.get("lastname") as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error(error);
    redirect("/auth/error");
  }

  revalidatePath("/signup/finish", "layout");
  redirect("/signup/finish");
}

export async function signout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/login", "layout");
  redirect("/login");
}

export async function deleteAccount() {
  console.log("Deleting account...");
  const supabase = createClient(true);
  const { data: userData, error: userError } = await supabase.auth.getUser();
  console.log(userData);
  const { data: deleteData, error: deleteError } =
    await supabase.auth.admin.deleteUser(userData.user?.id ?? "");
  if (deleteError) {
    console.error(deleteError);
    redirect("/auth/error");
  }

  revalidatePath("/login", "layout");
  redirect("/login");
}
