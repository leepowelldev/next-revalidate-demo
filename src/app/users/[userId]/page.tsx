import { db } from "@/db";
import { DeleteButton } from "../_components/delete-button";
import Link from "next/link";

export default async function UserPage({
  params: { userId },
}: {
  params: { userId: string };
}): Promise<JSX.Element> {
  const id = Number(userId);
  const user = await db.user.findFirst({ where: { id } });

  if (!user) {
    return (
      <>
        <p>User not found.</p>
        <Link href="/users">Back to Users</Link>
      </>
    );
  }

  return (
    <div>
      {user.name}
      <div>
        <DeleteButton userId={user.id} />
      </div>
    </div>
  );
}
