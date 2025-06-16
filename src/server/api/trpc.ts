//trpc.ts
import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';
import { type Context } from './context';

const t = initTRPC.create({
  transformer: SuperJSON,
});

export const router = t.router;
export const publicProcedure = t.procedure;
