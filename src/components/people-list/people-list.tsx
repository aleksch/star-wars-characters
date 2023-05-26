import { usePeopleList } from './use-people-list'
import { PeopleListTableView } from './people-list-table-view'
import { PeopleListGridView } from './people-list-grid-view'
import { ViewVariant } from '../../modules/people/interface/use-people-module'

export function PeopleList() {
  const { viewVariant, ...componentProps } = usePeopleList()

  return viewVariant === ViewVariant.CardsView
    ? <PeopleListGridView {...componentProps} />
    : <PeopleListTableView {...componentProps}/>
}
