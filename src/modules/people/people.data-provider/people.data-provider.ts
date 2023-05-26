import { CustomProvider } from '../../infra'
import { SwapiPeopleResponce } from './types'

const PEOPLE_URL = 'https://swapi.dev/api/people?'

enum PeopleRequestSearchParamsField {
  PAGE = 'page',
  SEARCH = 'search'
}

export class PeopleDataProvider extends CustomProvider {
  private abortController = new AbortController()

  async getPeopleData({ page = 1, searchString = '' }: { page?: number, searchString?: string }): Promise<SwapiPeopleResponce> {
    this.abortPreviousRequest()
    const queryParams = new URLSearchParams({ [PeopleRequestSearchParamsField.PAGE]: String(page) })
    if (searchString) {
      queryParams.append(PeopleRequestSearchParamsField.SEARCH, searchString)
    }

    const result = await this.customFetch<SwapiPeopleResponce>(`${PEOPLE_URL}${queryParams.toString()}`, this.abortController)

    return result
  }

  abortPreviousRequest() {
    this.abortController.abort()
    this.abortController = new AbortController()
  }
}
