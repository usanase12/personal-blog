// src/app/api/trpc/[trpc]/route.ts
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../../server/api/root';
import { createContext } from '../../../../server/api/context';

const handler = createNextApiHandler({
  router: appRouter,
  createContext,
});

export { handler as GET, handler as POST };
