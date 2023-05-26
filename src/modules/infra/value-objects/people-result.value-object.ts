import { CharacterValueObject } from './character.value-object'

export type PeopleResultValueObject = {
  items: CharacterValueObject[]
  count: number
  next: string | null
  previous: string | null
}
