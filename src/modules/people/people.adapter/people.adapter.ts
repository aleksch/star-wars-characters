import { PeopleResultValueObject } from '../../infra/value-objects/people-result.value-object'
import { PeopleDataProvider } from '../people.data-provider'
import { PeopleMapper } from '../mappers/people.mapper'
import { PeopleLocalStorageDataProvider } from '../people.data-provider/people-local-storage.data-provider'

type GetPeopleArgs = {
  page?: number, searchString?: string
}

export class PeopleAdapter {
  private peopleDataProvider: PeopleDataProvider
  private peopleLocalStorageDataProvider: PeopleLocalStorageDataProvider
  constructor() {
    this.peopleDataProvider = new PeopleDataProvider()
    this.peopleLocalStorageDataProvider = new PeopleLocalStorageDataProvider()
  }

  async getPeople({ page = 1, searchString = '' }: GetPeopleArgs): Promise<PeopleResultValueObject> {
    const { results, count, next, previous } = await this.peopleDataProvider.getPeopleData({ page, searchString})
    const infoAboutPeopleFromLocalStorage = this.peopleLocalStorageDataProvider.getAllCharacterData()

    return {
      items: PeopleMapper.mapPeople(results, infoAboutPeopleFromLocalStorage),
      count,
      next,
      previous
    } 
  }
}
