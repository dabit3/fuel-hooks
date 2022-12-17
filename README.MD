## Fuel React Hooks for queries and mutations

Example implementation for React Hooks abstracting away the need to know graphql 

### Usage

```javascript
import {
  useTransactionsByOwnerQuery
} from './generated'

const {
  data, error, loading
} = useTransactionsByOwnerQuery({
  variables: {
     owner: 'some-address'
  }
})
```