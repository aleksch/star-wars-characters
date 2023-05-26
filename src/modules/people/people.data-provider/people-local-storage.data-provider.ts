import { LocalStorageCustomProvider } from '../../infra/data-provider'
import { CharacterValueObject } from '../../infra/value-objects'

export class PeopleLocalStorageDataProvider extends LocalStorageCustomProvider {
  getAllCharacterData() {
    const people = []
    for (const characterId in window.localStorage) {
      const characterData = this.getElement<CharacterValueObject>(characterId)
      if (characterData?.characterId) {
        people.push(characterData)
      }
    }

    return people
  }
}
