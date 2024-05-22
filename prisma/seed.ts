import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("test", 12);
  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {
      externalID: "ksa",
    },
    create: {
      email: "test@test.com",
      name: "Test User",
      password: password,
      externalID: "ksa",
    },
  });
  const userAndPosts = await prisma.post.createMany({
    data: [
      {
        authorId: "ksa",
        title: "Prisma Day 2020",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        text: "sadasdsad",
        mood: "sad",
        tags: ["hello", "world"],
      }, // Populates authorId with user's id
      {
        authorId: "ksa",
        title: "How to write a Prisma schema",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        text: "asdasd",
        mood: "happy",
        tags: ["hello", "world"],
      }, // Populates authorId with user's id
    ],
  });
  console.log(user, userAndPosts);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
