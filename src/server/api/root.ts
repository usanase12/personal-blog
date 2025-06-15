// src/server/api/root.ts
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const appRouter = router({
  hello: publicProcedure.query(() => 'Hello from tRPC'),
  posts: router({
    create: publicProcedure
      .input(z.object({ title: z.string(), content: z.string() }))
      .mutation(({ input }) => ({
        id: Math.random().toString(),
        ...input,
      })),
  }),
});

export type AppRouter = typeof appRouter;
