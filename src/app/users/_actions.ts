"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function deleteUserAction(userId: number): Promise<void> {
  await db.user.delete({ where: { id: userId } });
  revalidatePath("/users");
}

export async function revalidateUsersAction(): Promise<void> {
  revalidatePath("/users");
}
