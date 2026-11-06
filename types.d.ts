export type PlaceType =
  'Centro'
  | 'Cerro de La Cruz'
  | 'Cerro de San Juan'
  | 'Zitacua'
  | 'Laguna de Mora'

export interface PlaceInfo {
  name: PlaceType
  google_maps_url: string
}
