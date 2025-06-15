import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/api/root'; // ✅ use correct path

export const api = createTRPCReact<AppRouter>();
