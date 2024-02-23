'use client';
import { PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes';
import { CssBaseline } from '@rad/ui/atoms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type PageWrapperProps = PropsWithChildren;

export function PageWrapper({ children }: PageWrapperProps) {
  const queryClient = new QueryClient();

  return (
    <AppRouterCacheProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </AppRouterCacheProvider>
  );
}
