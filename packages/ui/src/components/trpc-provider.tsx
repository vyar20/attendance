import { queryClient } from '@/lib/api'
import { QueryClientProvider } from '@tanstack/react-query'
import { type FC, type ReactNode } from 'react'
type TrpcProviderProps = {
  children?: ReactNode
}

export const TrpcProvider: FC<TrpcProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
