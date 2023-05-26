import { usePeopleModuleContext } from '../../modules/people/use-people-module-context'

export function usePeopleList() {
  const {
    peopleData,
    isLoading,
    peopleAmount,
    loadPeopleByPage,
    currentPage,
    viewVariant,
    goToCharacter,
  } = usePeopleModuleContext()

  return {
    peopleData,
    isLoading,
    peopleAmount,
    loadPeopleByPage,
    currentPage,
    viewVariant,
    goToCharacter,
  }
}
