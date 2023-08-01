"use client";

import { useRouter } from "next/navigation";
import { deleteUserAction } from "../_actions";

export type DeleteButtonProps = {
  userId: number;
};

export function DeleteButton({ userId }: DeleteButtonProps) {
  const router = useRouter();

  async function handleClick() {
    await deleteUserAction(userId);
    router.push("/users");
  }

  return (
    <button type="button" onClick={handleClick}>
      Delete
    </button>
  );
}
