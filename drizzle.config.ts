import "@/app/libs/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./app/libs/db/schema.ts",
  driver: "pg",
  out: "./migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;