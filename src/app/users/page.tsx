import { db } from "@/db";
import { table } from "console";
import Link from "next/link";
import { revalidateUsersAction } from "./_actions";
import { User } from "@prisma/client";

// export const revalidate = 0;
// export const dynamic = "force-dynamic";

export async function getUsers(): Promise<Array<User>> {
  const users = await db.user.findMany();
  return users;
}

export default async function UsersPage(): Promise<JSX.Element> {
  const users = await getUsers();

  if (!users.length) {
    return <p>No users found.</p>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link href={`/users/${user.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form action={revalidateUsersAction}>
        <button type="submit">Revalidate</button>
      </form>
    </>
  );
}
