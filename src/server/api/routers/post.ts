import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { posts } from "~/server/db/schema";

export const postRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }: { input: { text: string } }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }: { ctx: any; input: { name: string } }) => {
      await ctx.db.insert(posts).values({
        name: input.name,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }: { ctx: any }) => {
    const post = await ctx.db.query.posts.findFirst({
      orderBy: (posts: any, { desc }: { desc: any }) => [desc(posts.createdAt)],
    });

    return post ?? null;
  }),
});