import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';
import { RouterProvider } from 'react-router-dom';
import router from './Routes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
