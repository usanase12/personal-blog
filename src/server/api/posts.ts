import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";
import { eq, desc } from "drizzle-orm";

export const postsRouter = createTRPCRouter({
  // Fetch all posts
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.select().from(posts).orderBy(desc(posts.createdAt));
  }),

  // Fetch a single post by ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db
        .select()
        .from(posts)
        .where(eq(posts.id, input.id))
        .limit(1)
        .then((res) => res[0]);
    }),

  // Create a new post
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(posts).values({
        title: input.title,
        content: input.content,
        createdAt: Math.floor(Date.now() / 1000),
      });
    }),

  // Update a post
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1),
        content: z.string().min(1),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.db
        .update(posts)
        .set({
          title: input.title,
          content: input.content,
          updatedAt: Math.floor(Date.now() / 1000),
        })
        .where(eq(posts.id, input.id));
    }),

  // Delete a post
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.delete(posts).where(eq(posts.id, input.id));
    }),
});
