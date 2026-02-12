import { existsSync } from "node:fs";
import { resolve } from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

const envPath = resolve(process.cwd(), ".env.development.local");
if (existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  dotenv.config();
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
