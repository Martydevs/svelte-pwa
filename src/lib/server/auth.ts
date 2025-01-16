import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { SQLiteDatabase } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(SQLiteDatabase, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true
  }
})