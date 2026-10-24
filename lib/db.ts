    import { PrismaClient } from "@/generated/prisma/client";
    import { PrismaPg } from "@prisma/adapter-pg";

    const globalForDb = globalThis as unknown as { db?: PrismaClient };

    function createClient() {
      const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
      return new PrismaClient({ adapter });
    }

    export const db = globalForDb.db ?? createClient();

    if (process.env.NODE_ENV !== "production") globalForDb.db = db;