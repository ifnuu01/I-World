export interface Country {
  name: {
    common: string
    official: string
    nativeName?: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  cca2: string
  cca3: string
  capital?: string[]
  region: string
  subregion?: string
  population: number
  area: number
  flags: {
    png: string
    svg: string
    alt?: string
  }
  currencies?: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  languages?: {
    [key: string]: string
  }
  borders?: string[]
  timezones: string[]
}