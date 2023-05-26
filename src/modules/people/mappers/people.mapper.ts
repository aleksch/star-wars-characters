import { CustomMapper } from '../../infra'
import { CharacterValueObject } from '../../infra/value-objects'
import { SwapiPeople } from '../people.data-provider/types'

export class PeopleMapper extends CustomMapper {

  static mapPeople(peopleData: SwapiPeople[], localStoragePeopleData: null | CharacterValueObject[]): CharacterValueObject[] {
    const isLocalSorageDataExist = !!localStoragePeopleData

    return peopleData.map((people) => {
      const characterId = this.getCharacterIdFromUrl(people.url)
      const localStorageData = localStoragePeopleData?.find((character) => character.characterId === characterId)
      const isCharacterDataExistInLocalStorage = isLocalSorageDataExist && localStorageData ? !!localStorageData : false
      const isDifferentLocalStorageData = isLocalSorageDataExist && localStorageData ? !this.isEqual(people, localStorageData) : false

      if (isLocalSorageDataExist && isCharacterDataExistInLocalStorage && isDifferentLocalStorageData && localStorageData) {
        return { ...localStorageData, isChangedByUser: true }
      }

      return {
        characterId,
        name: people.name,
        height: people.height,
        mass: people.mass,
        hairColor: people.hair_color,
        skinColor: people.skin_color,
        eyeColor: people.eye_color,
        birthYear: people.birth_year,
        gender: people.gender,
        url: people.url,
        isChangedByUser: false
      }
    })
  }
}
