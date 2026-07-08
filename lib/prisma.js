import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma || new PrismaCliet();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
