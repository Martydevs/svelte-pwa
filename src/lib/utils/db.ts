import { SQLiteDatabase } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function isUserExists(tel: string) {
  const query = await SQLiteDatabase
    .select()
    .from(users)
    .where(
      eq(users.telefono, tel)
    ).limit(1);
  
  if (query.length > 0) {
    return true;
  } else {
    return false;
  }
}