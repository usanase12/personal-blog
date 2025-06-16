// src/server/trpc.ts

import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';

// Create tRPC instance with server config
const t = initTRPC.create({
  transformer: SuperJSON, // ✅ Set transformer here
  isServer: true,
});

// Export router and procedures
export const router = t.router;
export const publicProcedure = t.procedure;
