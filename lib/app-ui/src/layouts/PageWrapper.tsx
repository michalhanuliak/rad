import { PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes';
import { CssBaseline } from '@rad/ui/atoms';

export type PageWrapperProps = PropsWithChildren;

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
