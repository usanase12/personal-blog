import { appRouter } from '../../../../server/api/root';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}), // adjust if you use a context
  });

export { handler as GET, handler as POST };