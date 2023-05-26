import { LocalStorageCustomProvider } from '../../infra/data-provider'
import { CharacterValueObject } from '../../infra/value-objects'

export class CharacterLocalStorageDataProvider extends LocalStorageCustomProvider {
  getCharacterById(characterId: number): CharacterValueObject | null {
    const data = this.getElement<CharacterValueObject>(String(characterId))
    if (!data?.characterId) {
      return null
    }
    return this.getElement<CharacterValueObject>(String(characterId))
  }
  
  saveCharacterById(characterId: number, data: CharacterValueObject) {
    this.setElement(String(characterId), data)
  }

  removeCharaterDataById(characterId: number) {
    this.removeElement(String(characterId))
  }
}
