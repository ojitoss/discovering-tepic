export type PlaceType =
  'Centro'
  | 'Cerro de La Cruz'
  | 'Cerro de San Juan'
  | 'Zitacua'
  | 'Laguna de Mora'
  | 'Cinco Pueblos Casa De Artesanias'
  | 'Museo Regional de Nayarit'

export type PlaceCategory = 
  'Locations'
  | 'Cerro'
  | 'Laguna'
  | 'Museums'

export interface PlaceInfo {
  name: PlaceType
  category: PlaceCategory
  google_maps_url: string
  main_image: string
}
