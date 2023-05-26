import { useCallback, useState } from 'react'
import { CharacterValueObject } from '../../infra/value-objects'
import { PeopleAdapter } from '../people.adapter'

const peopleAdapter = new PeopleAdapter()

type Args = {
  page?: number
  searchString?: string
}

export function useLoadPeople() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [peopleData, setPeopleData] = useState<CharacterValueObject[]>([])
  const [peopleAmount, setPeopleAmount] = useState<number>(0)

  const loadPeople = useCallback(async ({ page, searchString }: Args) => {
    setIsLoading(true)
    const { count, items } = await peopleAdapter.getPeople({ page, searchString })
    setPeopleData(items)
    setPeopleAmount(count)
    setIsLoading(false)
  }, [])

  return {
    loadPeople,
    isLoading,
    peopleData,
    peopleAmount,
  }
}
