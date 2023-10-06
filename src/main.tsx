import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './scss/main.scss'

import { QueryClientProvider, } from '@tanstack/react-query'
import { queryClient, root } from './constants'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


createRoot(root).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
)
