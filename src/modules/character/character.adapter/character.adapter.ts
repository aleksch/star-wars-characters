import { CharacterValueObject } from '../../infra/value-objects'
import { CharacterDataProvider } from '../character.data-provider'
import { CharacterMapper } from '../mappers'
import { CharacterLocalStorageDataProvider } from '../character.data-provider'

export class CharacterAdapter {
  private characterDataProvider: CharacterDataProvider
  private characterLocalStorageDataProvider: CharacterLocalStorageDataProvider

  constructor() {
    this.characterDataProvider = new CharacterDataProvider()
    this.characterLocalStorageDataProvider = new CharacterLocalStorageDataProvider()
  }

  async getCharacter(characterId: number): Promise<CharacterValueObject> {
    const characterData = await this.characterDataProvider.getCharacterData(characterId)
    const characterDataFromLocalStorage = this.characterLocalStorageDataProvider.getCharacterById(characterId)

    return CharacterMapper.mapCharacter(characterData, characterDataFromLocalStorage)
  }

  saveCharacterById(characterId: number, data: CharacterValueObject) {
    this.characterLocalStorageDataProvider.saveCharacterById(characterId, { ...data, isChangedByUser: true })
  }

  removeSavedDataByCharacterId(characterId: number) {
    this.characterLocalStorageDataProvider.removeCharaterDataById(characterId)
  }
}
