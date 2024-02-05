'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';
import { ReactNode } from 'react';

export default function ProviderClient({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
