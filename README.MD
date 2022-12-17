## Fuel React Hooks for queries and mutations

Example implementation for React Hooks abstracting away the need to know graphql 

### Usage

```javascript
// in root
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

// in component
import {
  useTransactionsQuery
} from './generated'

const {
  data, isLoading, error
} = useTransactionsQuery({
  first: 100
})
```