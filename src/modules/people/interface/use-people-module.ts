import { useCallback, useState } from 'react'
import { useLoadPeople } from './use-load-people'
import { useViewPeopleVariant } from './use-view-people-variant'
import { useNavigate } from 'react-router-dom'

export enum ViewVariant {
  CardsView = 'cards-view',
  TableView = 'table-view'
}

export function usePeopleModule() {
  const [savedSearchString, setSavedSearchString] = useState<string | undefined>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const navigate = useNavigate()

  const {
    isLoading,
    loadPeople,
    peopleAmount,
    peopleData
  } = useLoadPeople()

  const {
    setViewVariant,
    viewVariant,
  } = useViewPeopleVariant()

  const loadAllPeople = useCallback(() => loadPeople({}), [loadPeople])

  const loadPeopleByPage = useCallback(
    (page: number) => {
      setCurrentPage(page)
      loadPeople({ page, searchString: savedSearchString })
    },
    [loadPeople, savedSearchString]
  )

  const saerchPeopleByName = useCallback((searchString: string) => {
    setCurrentPage(1)
    setSavedSearchString(searchString)
    loadPeople({ searchString, page: 1 })
  }, [loadPeople])

  const goToCharacter = useCallback((characterId: number) => {
    navigate(`/character/${characterId}`)
  }, [navigate]) 

  return {
    isLoading,
    loadPeople: loadAllPeople,
    peopleData,
    peopleAmount,
    loadPeopleByPage,
    saerchPeopleByName,
    currentPage,
    viewVariant,
    setViewVariant,
    goToCharacter,
  }
}
