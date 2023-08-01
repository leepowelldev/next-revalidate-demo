## Getting Started

```bash
npm install
```

```bash
npx prisma migrate dev
```

```bash
npm run dev
```

Navigate to [http://localhost:3000/users](http://localhost:3000/users) and click a user to edit. Then click `delete`, a server action is triggered which should revalidate `/users` however this doesn't seem to happen.

You can click the `validate` button on the `/users` page to trigger `revalidatePath` manually.
