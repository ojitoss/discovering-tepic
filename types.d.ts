export type PlaceType =
  'Cerro de La Cruz'
  | 'Cerro de San Juan'
  | 'Zitacua'
  | 'Laguna de Mora'
  | 'Cinco Pueblos Casa De Artesanias'
  | 'Casa Museo Juan Escutia'
  | 'La Loma'
  | 'Ruinas de Jauja'
  | 'Ciudad de Las Artes Indigenas'
  | 'Bellavista'
  | 'Aeropuerto Interacional de Tepic'
  | 'Escalinata Del Rodeo'
  | 'Plaza Forum Tepic'
  | 'Museo Regional de Nayarit'
  | 'Parque Ecologico'

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
