export class LocalStorageCustomProvider {
  protected getElement<ElementType>(elementKey: string): ElementType | null {
    const rowData: string = window.localStorage.getItem(elementKey) || ''
    if (rowData) {
      return JSON.parse(rowData)
    }

    return null
  }

  protected removeElement(key: string) {
    window.localStorage.removeItem(key)
  }

  protected setElement(key: string, data: unknown) {
    const stringifiedData = JSON.stringify(data)
    window.localStorage.setItem(key, stringifiedData)
  }
}
