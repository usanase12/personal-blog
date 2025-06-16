import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postsRouter = router({
  getAll: publicProcedure.query(async () => {
    return prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return prisma.post.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        content: z.string(),
        category: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return prisma.post.update({
        where: { id: input.id },
        data: {
          title: input.title,
          content: input.content,
          category: input.category,
        },
      });
    }),
   delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      return prisma.post.delete({ where: { id: input.id } });
    }),
});