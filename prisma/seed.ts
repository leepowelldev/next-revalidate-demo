import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
    },
  });

  const dave = await prisma.user.upsert({
    where: { email: "dave@prisma.io" },
    update: {},
    create: {
      email: "dave@prisma.io",
      name: "Dave",
    },
  });

  const jane = await prisma.user.upsert({
    where: { email: "jane@prisma.io" },
    update: {},
    create: {
      email: "jane@prisma.io",
      name: "Jane",
    },
  });

  const bill = await prisma.user.upsert({
    where: { email: "bill@prisma.io" },
    update: {},
    create: {
      email: "bill@prisma.io",
      name: "Bill",
    },
  });

  await Promise.allSettled([alice, bob, dave, jane, bill]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
