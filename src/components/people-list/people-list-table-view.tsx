import Table, { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { CharacterValueObject } from '../../modules/infra/value-objects'
import { ViewProps } from './types'

const PAGINATION_OPTIONS: TablePaginationConfig = {
  showSizeChanger: false,
  responsive: true,
  position: ['bottomCenter']
}

const columns: ColumnsType<CharacterValueObject> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Height', dataIndex: 'height', key: 'height' },
  { title: 'Mass', dataIndex: 'mass', key: 'mass' },
  { title: 'Hair color', dataIndex: 'hairColor', key: 'hairColor' },
  { title: 'Skin color', dataIndex: 'skinColor', key: 'skinColor' },
  { title: 'Eye color', dataIndex: 'eyeColor', key: 'eyeColor' },
  { title: 'Birth year', dataIndex: 'birthYear', key: 'birthYear' },
  { title: 'Gender', dataIndex: 'gender', key: 'gender' },
  {
    title: 'Changed',
    dataIndex: 'isChangedByUser',
    key: 'isChangedByUser',
    render: (text: string) => <div style={{ textAlign: 'center' }}>{text ? <CheckCircleOutlined /> : <CloseCircleOutlined />}</div>,
    width: 95
  }
]

export function PeopleListTableView({
  isLoading,
  peopleData,
  peopleAmount,
  currentPage,
  loadPeopleByPage,
  goToCharacter
}: ViewProps) {
  return (
    <Table
      columns={columns}
      dataSource={peopleData}
      sticky
      bordered
      tableLayout="fixed"
      loading={isLoading}
      rowKey="name"
      onRow={(record) => {
        return {
          onClick: () => goToCharacter(record.characterId),
        }
      }}
      pagination={{
        ...PAGINATION_OPTIONS,
        current: currentPage,
        onChange: loadPeopleByPage,
        total: peopleAmount
      }}
      scroll={{ x: 1000 }}
    />
  )
}