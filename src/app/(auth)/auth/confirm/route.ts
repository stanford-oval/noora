import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  console.log("GET /auth/confirm");
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");

  console.log({ token_hash, type, next, redirectTo });

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (error) {
      console.error(error);
      // return the user to an error page with some instructions
      redirectTo.pathname = "/auth/error";
      return NextResponse.redirect(redirectTo);
    }
  }

  console.log("Redirecting to", redirectTo.toString());

  redirectTo.searchParams.delete("next");
  return NextResponse.redirect(redirectTo);
}
