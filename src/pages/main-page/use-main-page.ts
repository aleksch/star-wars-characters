import { useEffect } from 'react'
import { usePeopleModuleContext } from '../../modules/people/use-people-module-context'

export function useMainPage() {
  const { loadPeople, peopleData, isLoading, peopleAmount, loadPeopleByPage } = usePeopleModuleContext()

  useEffect(() => {
    loadPeople()
  }, [loadPeople])

  return {
    items: peopleData,
    isLoading,
    peopleAmount,
    loadPeopleByPage
  }
}
