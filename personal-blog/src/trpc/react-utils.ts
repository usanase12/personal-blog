// trpc/react.ts
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/api/root'; // Adjust based on location of this file



export const api = createTRPCReact<AppRouter>();
