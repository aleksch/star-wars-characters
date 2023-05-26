import { Input } from 'antd'
import { useSearchInput } from './use-search-input'

const { Search } = Input

export function SearchInput() {
  const { isLoading, onSearch } = useSearchInput()

  return (
    <Search
      placeholder="Search by name"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      loading={isLoading}
    />
  )
}
