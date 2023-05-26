import { SwapiCharacterResponce } from '../../character/character.data-provider/types'
import { CharacterValueObject } from '../value-objects'

export class CustomMapper {
  protected static getCharacterIdFromUrl(url: string): number {
    const characterId = url.match(/\/people\/(\d+)/)?.[1]
    
    return Number(characterId) || 0
  }

  protected static isEqual(characterData: SwapiCharacterResponce, LSCharacterData: CharacterValueObject): boolean {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = characterData
    const { name: lsName, height: lsHeight, mass: lsMass, hairColor, skinColor, eyeColor, birthYear, gender: lsGender } = LSCharacterData
  
    return (
      name === lsName &&
      height === lsHeight &&
      mass === lsMass &&
      hair_color === hairColor &&
      eye_color === eyeColor &&
      birth_year === birthYear &&
      skinColor === skin_color &&
      gender === lsGender
    )
  }
}
