import { SQLiteDatabase } from "@/server/db";
import { user } from "@/server/db/auth-schema";
import { eq } from "drizzle-orm";

export async function isUserExists(email: string) {
  const query = await SQLiteDatabase
    .select()
    .from(user)
    .where(
      eq(user.email, email)
    ).limit(1);
  
  if (query.length > 0) {
    return true;
  } else {
    return false;
  }
}