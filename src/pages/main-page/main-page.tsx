import { useMainPage } from './use-main-page'
import { PageLayout, PeopleList, PeoplePageDivider, SearchInput } from '../../components'

export function MainPage() {
  useMainPage()

  return (
    <PageLayout>
      <SearchInput />
      <PeoplePageDivider />
      <PeopleList />
    </PageLayout>
  )
}
