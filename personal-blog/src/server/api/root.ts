//root.ts
import { router } from '../trpc';
import { postsRouter } from './posts';

export const appRouter = router({
  posts: postsRouter,
  // ...other routers
});

export type AppRouter = typeof appRouter;