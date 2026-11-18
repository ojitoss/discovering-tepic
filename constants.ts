import { type PlaceCategory, type PlaceInfo } from './types.d'

export const TEPIC_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237577.84604983852!2d-105.02811964030073!3d21.501693167784197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842735d8893dcfdb%3A0x83784645f40c2d79!2sTepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793888330262!5m2!1ses!2smx"

export const NAV_BAR_SECTIONS: { title: string, path: string }[] = [{
  title: 'Home',
  path: ''
},
{
  title: 'Places',
  path: 'places'
}
]

/* JSON INFO */
export const PLACES_INFO: PlaceInfo[] = [
  {
    name: 'Centro',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29695.74801753862!2d-104.91315747693689!3d21.50895366378893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273702c0e631ab%3A0xf8dd9a85cd205254!2sCentro%2C%2063000%20Tepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793887136218!5m2!1ses!2smx',
    main_image: 'https://www.bing.com/th/id/OIP.vjvbqDzXA96B9E1aFo4XLAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&pid=ImgAns&rm=2'
  },
  {
    name: 'Cerro de La Cruz',
    category: 'Cerro',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.3098831012135!2d-104.88648742239573!3d21.534735170203852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737b6d5bcfac5%3A0x867d0b081661303e!2sCerro%20De%20La%20Cruz!5e0!3m2!1ses!2smx!4v1793903930440!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/OIP.z8zwQya4BE4IKkXiD3QpEgHaDZ?w=299&h=160&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    name: 'Cerro de San Juan',
    category: 'Cerro',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.021579773617!2d-104.92517482239559!3d21.506874671180285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427369b8441abf9%3A0x458404e6cd12a99c!2sCerro%20de%20San%20Juan!5e0!3m2!1ses!2smx!4v1793904088110!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/ODL.757f788633dec4374debde5f5481253d?w=310&h=198&c=7&rs=1&bgcl=ffff14&r=0&o=6&pid=AlgoBlockDebug'
  },
  {
    name: 'Zitacua',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.5693759801375!2d-5.156519790102679!3d38.19667577325012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273712a802e955%3A0x1535089010819cb!2sZit%C3%A1cua%2C%2063174%20Tepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793904481155!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/OIP.JHwVaYDlpKGkKmwgcbuhAQHaFj?w=251&h=188&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    name: 'Laguna de Mora',
    category: 'Laguna',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1816643.4864709196!2d-100.87713773453892!3d19.227583183698684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737a23d74785d%3A0x50f28cb70dfa857e!2sLaguna%20De%20Mora%2C%2063037%20Tepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793904973517!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/OIP.tGnGNNJNxmR0Bg6aqFN26wHaEK?w=322&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    name: 'Casa Museo Juan Escutia',
    category: 'Museums',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.3474630875953!2d-104.89281621392395!3d21.510516013970374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273701c092f3cb%3A0x5f74ce0149b32666!2sCasa%20Museo%20Juan%20Escutia!5e0!3m2!1ses-419!2smx!4v1794978353534!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcambn7ge5oaJxEKL-Q2hKPlmI_Rb3Zjen4iuaFJCPuID2hmSfRSrnIn1PKaCY3ugwK3dT81EaYu_yhOvw1kKWMBEoJykNIXQVfGoeFDHjmGOJSnddnwQ86Cu12knMHLBpIR0E=w408-h306-k-no'
  },
  {
    name: 'Cinco Pueblos Casa De Artesanias',
    category: 'Museums',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.937033205682!2d-104.89497862563259!3d21.51018618026194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736fe21bb980b%3A0x6269bd642952ee1d!2sCinco%20Pueblos%20Casa%20De%20Artesanias!5e0!3m2!1ses-419!2smx!4v1794455319989!5m2!1ses-419!2smx"',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLd1Jt9HdvNBY8nBdoiMJJx9jutUyJFpjtfHuTS7ZKab9xKXtsQfKKspADFBctiyPqcbV3Kyc4g7o5KgKBXCoSstZw5PkKg2nBMKMsD2ZERX0PI9eweWgkygx0AGmmdnRgzd015kXw=w408-h306-k-no'
  },
  {
    name: 'Arroyo "El Agua Azul"',
    category: 'Laguna',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.4653096856955!2d-104.80815982563206!3d21.5286536802488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842739007507b0b3%3A0x87d341fc2fc34e0a!2zQXJyb3lvIOKAnEVsIEFndWEgQXp1bOKAnQ!5e0!3m2!1ses-419!2smx!4v1794978012881!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdE5dB_eXVAPsDwrgOlYyk0tucjwg7T8_joacUKGmtGcHGk7PTLNRjKnHOLLwfwAGnk-7_VUwzJISHoUjJhXbhWC-iimKWVoqOof7ixDRtPsk9k9HzaH7CpW1W6_kJiiLGXemjRhg=w408-h528-k-no'
  },
  {
    name: 'La Loma',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.097584064638!2d-104.90711722563259!3d21.503897330266636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736f089b458f5%3A0xe4fb7d1660adf018!2sLa%20Loma%2C%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1794978503723!5m2!1ses-419!2smx',
    main_image: 'https://tse2.mm.bing.net/th/id/OIP.rNQSrbrf4A87S-1L53GyVwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Ruinas de Jauja',
    category: 'Museums',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.5146802311983!2d-104.89433067563208!3d21.52672158025022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273652a628bcc5%3A0x7d854bdd2cf7b254!2sRuinas%20de%20Jauja%2C%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1794978777986!5m2!1ses-419!2smx',
    main_image: 'https://tse2.mm.bing.net/th/id/OIP.NS8NJw1-clOqXDP2AmcvuwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Ciudad de Las Artes Indigenas',
    category: 'Museums',
    google_maps_url: 'ttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.801207173664!2d-104.89317332563225!3d21.515505180258117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427378b99c1e59d%3A0x83293b465dcdc351!2sCiudad%20de%20las%20Artes%20Ind%C3%ADgenas!5e0!3m2!1ses-419!2smx!4v1794979018100!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdzzgy8QmE2Tifz640KVuFGLkY8N0d9hfZIJU6lYC_svTdrEFiaEtXWMXPzkRXPwurBpLkpDM6CeNQJaUQ7yEB9RCI_m1QqUxjke5Xcnc4620w0daQyhk-oUDNL6ktivcCnjiKxJa6Fyoc=w408-h510-k-no'
  },
  {
    name: 'Parque Metropolitano',
    category: 'Laguna',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.0878980785424!2d-104.86088862990863!3d21.490678492240793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737437339cacf%3A0xd927c2c02b2b3161!2sParque%20Metropolitano!5e0!3m2!1ses-419!2smx!4v1794979359017!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcOfO2dyHeEAnGBqbtj_yARAXsWwFhMhJGSqiRzna2nqyWzgMuwnZE5Xra0NgD-8IU-5mG4WXk5PddIrUKoEIH2tw-0Xsiag1JIkUcgnquI9LGSCNm902VnRh4ulmbydZIM7pwJ=w408-h544-k-no'
  },
  {
    name: 'Bellavista',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7421.216150841894!2d-104.88765486121672!3d21.562174970895782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842748282e36474f%3A0x7f31c211c57260ef!2s63501%20Bellavista%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1794979518164!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLe4y7E5vXPmmLELIOPV6_3wTHMIpQ3eiRMj2XG98Z7m8FKGZQ7TPb1caCjKytVdCFV6br0shn8H-HhC40sYKPn4uzC0M3i1LA1b3AqFK8tozFjmu0bmIE9axyGdv7R2S11GUCr3hQ=w408-h306-k-no',
  },
]

interface CategoryInfo {
  places_info_indexes: number[]
  description: string
}

export const CATEGORIES_INFO: Record<PlaceCategory, CategoryInfo> = {
  Locations: { 
    places_info_indexes: [0, 3, 8, 12],
    description: 'In Tepicyork we have many locations like the Centro'
  },
  Cerro: {
    places_info_indexes: [1, 2],
    description: 'In Tepicyork we have two mains Cerros that you can hike'
  },
  Laguna: {
    places_info_indexes: [4, 7, 11],
    description: 'In Tepicyork we have some water'
  },
  Museums: {
    places_info_indexes: [5, 6, 9, 10],
    description: 'In Tepicyork we have several museums at Centro'
  }
}