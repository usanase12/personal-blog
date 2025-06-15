//react.tsx
'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import SuperJSON from 'superjson';
import { api } from './react-utils';

export function TRPCReactProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: () => process.env.NODE_ENV === 'development',
        }),
        httpBatchLink({
          url: getBaseUrl() + '/api/trpc',
          transformer: SuperJSON,
        }),
      ],
    })
  );

  // 👇 This is where you put the providers
  return (
  <QueryClientProvider client={queryClient}>
    <api.Provider client={trpcClient} queryClient={queryClient}>
      {children}
    </api.Provider>
  </QueryClientProvider>
);
}

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}