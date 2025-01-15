import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  nombre: text("nombre", { length: 50 }).notNull(),
  apellido: text("apellido", { length: 50 }).notNull(),
  telefono: text("telefono", { length: 10 }).notNull(),
  edad: integer("edad").notNull(),
  password: text("password", { length: 50 }).notNull(),
});

export type NewUser = typeof users.$inferInsert;
