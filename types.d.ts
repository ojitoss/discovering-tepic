export type PlaceType =
  'Centro'
  | 'Cerro de La Cruz'
  | 'Cerro de San Juan'
  | 'Zitacua'
  | 'Laguna de Mora'

export type PlaceCategory = 
  'Location'
  | 'Cerro'
  | 'Laguna'

export interface PlaceInfo {
  name: PlaceType
  category: PlaceCategory
  google_maps_url: string
}
