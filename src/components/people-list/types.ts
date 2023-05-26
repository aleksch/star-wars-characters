import { CharacterValueObject } from '../../modules/infra/value-objects'

export type ViewProps = {
  isLoading: boolean
  peopleData: CharacterValueObject[]
  peopleAmount: number
  currentPage: number
  loadPeopleByPage: (pageNumber: number) => void
  goToCharacter: (characterId: number) => void
}
