import { SegmentedValue } from 'antd/es/segmented'
import { usePeopleModuleContext } from '../../modules/people/use-people-module-context'
import { ViewVariant } from '../../modules/people/interface/use-view-people-variant'

export function usePeoplePageDivider() {
  const { viewVariant, setViewVariant, } = usePeopleModuleContext()

  const onChange = (value: SegmentedValue) => {
    setViewVariant(value as ViewVariant)
  }

  return {
    viewVariant,
    onChange,
  }
}