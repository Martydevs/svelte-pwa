import { users, type NewUser } from "../db/schema"
import { SQLiteDatabase } from "../db";
import { isUserExists } from "@/utils/db";

export async function addUser(data: NewUser) {
  const isExists = await isUserExists(data.telefono);

  if (!isExists) {
    await SQLiteDatabase
    .insert(users)
    .values({
      nombre: data.nombre,
      apellido: data.apellido,
      telefono: data.telefono,
      edad: data.edad,
      password: data.password
    })
  } else {
    throw new Error("Ya existe un usuario con ese telefono");
  }
}