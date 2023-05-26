import { CustomMapper } from '../../infra/mappers'
import { CharacterValueObject } from '../../infra/value-objects'
import { SwapiCharacterResponce } from '../character.data-provider/types'

export class CharacterMapper extends CustomMapper {

  static mapCharacter(characterData: SwapiCharacterResponce, localStorageCharacterData: null | CharacterValueObject): CharacterValueObject {
    const isLocalSorageDataExist = !!localStorageCharacterData
    const isDifferentLocalStorageData = isLocalSorageDataExist ? !this.isEqual(characterData, localStorageCharacterData) : false

    if (isLocalSorageDataExist && isDifferentLocalStorageData) {
      return localStorageCharacterData
    }

    return {
      characterId: this.getCharacterIdFromUrl(characterData.url),
      name: characterData.name,
      height: characterData.height,
      mass: characterData.mass,
      hairColor: characterData.hair_color,
      skinColor: characterData.skin_color,
      eyeColor: characterData.eye_color,
      birthYear: characterData.birth_year,
      gender: characterData.gender,
      isChangedByUser: false
    }
  }
}
