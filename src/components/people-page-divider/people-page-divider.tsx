import { Divider, Segmented, Space } from 'antd'
import { SegmentedLabeledOption } from 'antd/es/segmented'
import { ViewVariant } from '../../modules/people/interface/use-people-module'
import { usePeoplePageDivider } from './use-people-page-divider'

const segmentedOptions: SegmentedLabeledOption[] = [
  { value: ViewVariant.CardsView, label: 'Cards' },
  { value: ViewVariant.TableView, label: 'Table' },
]

export function PeoplePageDivider() {
  const { onChange, viewVariant } = usePeoplePageDivider()

  return (
    <Divider children={
      <Space>
        People
        <Segmented options={segmentedOptions} value={viewVariant} onChange={onChange}/>
      </Space>
    }/>
  )
}
