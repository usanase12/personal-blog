
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";  // Import your schema
import { eq, desc } from "drizzle-orm";       // Import helpers

export const postsRouter = createTRPCRouter({
  // Get all posts, ordered by createdAt descending
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db
      .select()
      .from(posts)
      .orderBy(desc(posts.createdAt));  // Use desc() helper here
  }),

  // Get post by ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db
        .select()
        .from(posts)
        .where(eq(posts.id, input.id))   // Use eq() helper here
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
        createdAt: Math.floor(Date.now() / 1000), // Unix timestamp for SQLite integer
      });
    }),

    
  // Update post by ID
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

  // Delete post by ID
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.delete(posts).where(eq(posts.id, input.id));
    }),
});
