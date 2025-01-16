import { user, type newUser } from "../db/auth-schema"
import { SQLiteDatabase } from "../db";
import { isUserExists } from "@/utils/db";

export async function addUser(data: newUser) {
  const isExists = await isUserExists(data.email);

  if (!isExists) {
    await SQLiteDatabase
    .insert(user)
    .values({
      name: data.name,
      updatedAt: new Date(),
      emailVerified: false,
      email: data.email,
      createdAt: new Date(),
      image: data.image ?? null,
    })
  } else {
    throw new Error("Ya existe un usuario con ese correo");
  }
}