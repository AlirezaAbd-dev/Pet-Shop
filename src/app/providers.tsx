// app/providers.jsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import * as React from 'react';

// app/providers.jsx

// app/providers.jsx

// app/providers.jsx

// app/providers.jsx

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});

export function Providers(props: { children: React.ReactNode }) {
  const [queryClientInstance] = React.useState(() => queryClient);

  return (
    <QueryClientProvider client={queryClientInstance}>
      <ReactQueryStreamedHydration>
        {props.children}
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
