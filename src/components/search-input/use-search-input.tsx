import { usePeopleModuleContext } from '../../modules/people/use-people-module-context'

export function useSearchInput() {
  const { isLoading, saerchPeopleByName } = usePeopleModuleContext()

  const onSearch = saerchPeopleByName

  return {
    isLoading,
    onSearch,
  }
}
