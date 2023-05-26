export class CustomProvider {
  async customFetch<ResponceType>(url: string, controller?: AbortController): Promise<ResponceType> {
    const res = await fetch(url, { signal: controller?.signal })
    const result: ResponceType = await res.json()
  
    return result
  }
}
