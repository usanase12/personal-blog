//posts.ts
import { router, publicProcedure } from './trpc';
import { z } from 'zod';

export const postsRouter = router({
  getAll: publicProcedure.query(() => [
    { id: '1', title: 'First Post', content: 'Hello world!' },
    { id: '2', title: 'Second Post', content: 'Another post.' },
  ]),
  getLatest: publicProcedure.query(() => {
    // For demo, just return the last post
    return { id: '2', title: 'Second Post', content: 'Another post.' };
  }),
  create: publicProcedure
  .input(
    z.object({
      title: z.string(),
      content: z.string(), // <-- add this line
    })
  )
  .mutation(({ input }) => ({
    id: Math.random().toString(),
    title: input.title,
    content: input.content, // <-- add this line
  })),
});