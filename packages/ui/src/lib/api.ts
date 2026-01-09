import { type AppRouter } from '@repo/trpc/routes/_app'
import { QueryClient } from '@tanstack/react-query'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'

export const queryClient = new QueryClient()

export const trpcClient = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: 'http://10.62.10.20:3000/api' })]
})

export const api = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient
})
