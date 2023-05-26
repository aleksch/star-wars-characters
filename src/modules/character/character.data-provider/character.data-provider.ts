import { CustomProvider } from '../../infra'
import { SwapiCharacterResponce } from './types'

const CHARACTER_URL = 'https://swapi.dev/api/people'

export class CharacterDataProvider extends CustomProvider {
  private abortController = new AbortController()

  async getCharacterData(characterId: number): Promise<SwapiCharacterResponce> {
    this.abortPreviousRequest()
    const result = await this.customFetch<SwapiCharacterResponce>(`${CHARACTER_URL}/${characterId}`, this.abortController)

    return result
  }

  abortPreviousRequest() {
    this.abortController.abort()
    this.abortController = new AbortController()
  }
}
