import { user, type newUser } from "../db/auth-schema";
import { SQLiteDatabase } from "../db";
import { isUserExists } from "@/utils/db";

export async function addUser(data: newUser) {
  const isExists = await isUserExists(data.email);

  if (!isExists) {
    await SQLiteDatabase
    .insert(user)
    .values({
      id: data.id,
      name: data.name,
      password: data.password,
      email: data.email,
      emailVerified: data.emailVerified,
      image: data.image,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  } else {
    throw new Error("Ya existe un usuario con ese correo");
  }
}
