import { List } from 'antd'
import { PaginationConfig } from 'antd/es/pagination'
import { ListGridType } from 'antd/es/list'
import { PeopleCard } from '../people-card'
import { ViewProps } from './types'

const GRID_OPTIONS: ListGridType = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 2,
  lg: 4,
  xl: 5,
  xxl: 5,
}

const PAGINATION_OPTIONS: PaginationConfig = {
  align: 'center',
  showSizeChanger: false,
  responsive: true
}

export function PeopleListGridView({
  isLoading,
  peopleData,
  peopleAmount,
  currentPage,
  loadPeopleByPage,
  goToCharacter,
}: ViewProps) {
  return (
    <List
      loading={isLoading}
      grid={GRID_OPTIONS}
      dataSource={peopleData}
      pagination={{
        ...PAGINATION_OPTIONS,
        total: peopleAmount,
        onChange: loadPeopleByPage,
        current: currentPage
      }}
      renderItem={(item) => (
        <List.Item key={item.name} onClick={() => goToCharacter(item.characterId)}>
          <PeopleCard {...item} />
        </List.Item>
      )}
    />
  )
}
