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
    name: 'Cerro de La Cruz',
    category: 'Cerro',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.3098831012135!2d-104.88648742239573!3d21.534735170203852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737b6d5bcfac5%3A0x867d0b081661303e!2sCerro%20De%20La%20Cruz!5e0!3m2!1ses!2smx!4v1793903930440!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/OIP.z8zwQya4BE4IKkXiD3QpEgHaDZ?w=299&h=160&c=7&r=0&o=7&pid=1.7&rm=3',
    time_staps: [
      {
        text: 'What is this place',
        time: 4
      },
      {
        text: 'Main atraction of the place',
        time: 15
      },
      {
        text: 'Where is located',
        time: 25
      }
    ],
    tiktok_id: 7711147026053942548
  },
  {
    name: 'Cerro de San Juan',
    category: 'Cerro',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.021579773617!2d-104.92517482239559!3d21.506874671180285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427369b8441abf9%3A0x458404e6cd12a99c!2sCerro%20de%20San%20Juan!5e0!3m2!1ses!2smx!4v1793904088110!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/ODL.757f788633dec4374debde5f5481253d?w=310&h=198&c=7&rs=1&bgcl=ffff14&r=0&o=6&pid=AlgoBlockDebug',
    time_staps: [
      {
        text: 'What is this place',
        time: 3 
      },

      {
        text: 'Where is located',
        time: 10
      }
    ],
    tiktok_id: 7711139942130339092
  },
  {
    name: 'Zitacua',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.5693759801375!2d-5.156519790102679!3d38.19667577325012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273712a802e955%3A0x1535089010819cb!2sZit%C3%A1cua%2C%2063174%20Tepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793904481155!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/OIP.JHwVaYDlpKGkKmwgcbuhAQHaFj?w=251&h=188&c=7&r=0&o=7&pid=1.7&rm=3',
    time_staps: [
      {
        text: 'Place of the "Turibus"',
        time: 3
      },
      {
        text: 'Wixarica mural and some of its history',
        time: 7
      },
      {
        text: 'Food that we can looking for',
        time: 18
      },
      {
        text: 'What is the "Mirador"',
        time: 26
      }
    ],
    tiktok_id: 7711146914292485397
  },
  {
    name: 'Laguna de Mora',
    category: 'Laguna',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1816643.4864709196!2d-100.87713773453892!3d19.227583183698684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737a23d74785d%3A0x50f28cb70dfa857e!2sLaguna%20De%20Mora%2C%2063037%20Tepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793904973517!5m2!1ses!2smx',
    main_image: 'https://th.bing.com/th/id/OIP.tGnGNNJNxmR0Bg6aqFN26wHaEK?w=322&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    time_staps: [
      {
        text: 'What is this place',
        time: 1
      },
      {
        text: 'Things that we can do it here',
        time: 10
      },
      {
        text: 'The best part of the place',
        time: 20
      }
    ],
    tiktok_id: 7711143798054767924
  },
  {
    name: 'Casa Museo Juan Escutia',
    category: 'Museums',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.3474630875953!2d-104.89281621392395!3d21.510516013970374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273701c092f3cb%3A0x5f74ce0149b32666!2sCasa%20Museo%20Juan%20Escutia!5e0!3m2!1ses-419!2smx!4v1794978353534!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcambn7ge5oaJxEKL-Q2hKPlmI_Rb3Zjen4iuaFJCPuID2hmSfRSrnIn1PKaCY3ugwK3dT81EaYu_yhOvw1kKWMBEoJykNIXQVfGoeFDHjmGOJSnddnwQ86Cu12knMHLBpIR0E=w408-h306-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 1
      },
      {
        text: 'What we can learn about the history',
        time: 10
      },
      {
        text: 'Main atraction of the place',
        time: 20
      }
    ],
    tiktok_id: 7711145269068401941
  },
  {
    name: 'Cinco Pueblos Casa De Artesanias',
    category: 'Museums',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.937033205682!2d-104.89497862563259!3d21.51018618026194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736fe21bb980b%3A0x6269bd642952ee1d!2sCinco%20Pueblos%20Casa%20De%20Artesanias!5e0!3m2!1ses-419!2smx!4v1794455319989!5m2!1ses-419!2smx"',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLd1Jt9HdvNBY8nBdoiMJJx9jutUyJFpjtfHuTS7ZKab9xKXtsQfKKspADFBctiyPqcbV3Kyc4g7o5KgKBXCoSstZw5PkKg2nBMKMsD2ZERX0PI9eweWgkygx0AGmmdnRgzd015kXw=w408-h306-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 1
      },
      {
        text: 'Where is located',
        time: 15
      },
      {
        text: 'Things that we can look for',
        time: 20
      },
      {
        text: 'What you can learn about in this place',
        time: 45
      },
      {
        text: 'Videos and images of the place',
        time: 65
      }
    ],
    tiktok_id: 7711146765038144788
  },
  {
    name: 'La Loma',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.097584064638!2d-104.90711722563259!3d21.503897330266636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736f089b458f5%3A0xe4fb7d1660adf018!2sLa%20Loma%2C%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1794978503723!5m2!1ses-419!2smx',
    main_image: 'https://tse2.mm.bing.net/th/id/OIP.rNQSrbrf4A87S-1L53GyVwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    time_staps: [
      {
        text: 'Things that you can do here',
        time: 2
      },
      {
        text: 'What is this place',
        time: 12
      },
      {
        text: 'Why is important for people of Tepic',
        time: 32
      },
      {
        text: 'Recomendation of this place',
        time: 50
      }
    ],
    tiktok_id: 7711146175398710549
  },
  {
    name: 'Ruinas de Jauja',
    category: 'Museums',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.5146802311983!2d-104.89433067563208!3d21.52672158025022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273652a628bcc5%3A0x7d854bdd2cf7b254!2sRuinas%20de%20Jauja%2C%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1794978777986!5m2!1ses-419!2smx',
    main_image: 'https://tse2.mm.bing.net/th/id/OIP.NS8NJw1-clOqXDP2AmcvuwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    time_staps: [
      {
        text: 'What is this place',
        time: 4
      },
      {
        text: 'Things that we can look for here',
        time: 15
      },
      {
        text: 'How old is this place',
        time: 40
      },
      {
        text: 'What is at today',
        time: 98
      },
      {
        text: 'Why is important now',
        time: 105
      }
    ],
    tiktok_id: 7711146552303177012
  },
  {
    name: 'Ciudad de Las Artes Indigenas',
    category: 'Museums',
    google_maps_url: 'ttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.801207173664!2d-104.89317332563225!3d21.515505180258117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427378b99c1e59d%3A0x83293b465dcdc351!2sCiudad%20de%20las%20Artes%20Ind%C3%ADgenas!5e0!3m2!1ses-419!2smx!4v1794979018100!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdzzgy8QmE2Tifz640KVuFGLkY8N0d9hfZIJU6lYC_svTdrEFiaEtXWMXPzkRXPwurBpLkpDM6CeNQJaUQ7yEB9RCI_m1QqUxjke5Xcnc4620w0daQyhk-oUDNL6ktivcCnjiKxJa6Fyoc=w408-h510-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 1
      },
      {
        text: 'Where is located',
        time: 4
      },
      {
        text: 'Two main thing we can look for here',
        time: 25
      },
      {
        text: 'Things that the place sell to us',
        time: 55
      },
      {
        text: 'Horary of the place',
        time: 67
      }
    ],
    tiktok_id: 7711140740927081748
  },
  {
    name: 'Bellavista',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7421.216150841894!2d-104.88765486121672!3d21.562174970895782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842748282e36474f%3A0x7f31c211c57260ef!2s63501%20Bellavista%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1794979518164!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLe4y7E5vXPmmLELIOPV6_3wTHMIpQ3eiRMj2XG98Z7m8FKGZQ7TPb1caCjKytVdCFV6br0shn8H-HhC40sYKPn4uzC0M3i1LA1b3AqFK8tozFjmu0bmIE9axyGdv7R2S11GUCr3hQ=w408-h306-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 1
      },
      {
        text: 'Main caracteristics',
        time: 6
      },
      {
        text: 'Things inside the church',
        time: 15
      },
      {
        text: 'Views of architecture of the place',
        time: 28
      }
    ],
    tiktok_id: 7711139354520947988
  },
  {
    name: 'Aeropuerto Interacional de Tepic',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771169.1211174764!2d-108.03213314953655!3d22.62460160786119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736e4ee327925%3A0x6b568feb3b2a00a7!2sAeropuerto%20Internacional%20de%20Tepic!5e0!3m2!1ses-419!2smx!4v1795412358245!5m2!1ses-419!2sm',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLe4dTX4c7-0_a8aMDpMJpFsf2mZKPuZk77ANfUzU2aPN93gde1l3WtvKq9rk3ybtmz_8PVG0JmX-46vorsr6gpPOJ6aMbmm8LoryZarXpyDeWShX1l0ueDTLmv96D-zR_sJgsH6=w408-h408-k-no',
    time_staps: [
      {
        text: 'What is that place',
        time: 4
      },
      {
        text: 'Why is important for Tepic',
        time: 14
      },
      {
        text: 'International places that we can visit from the airport',
        time: 19
      }
    ],
    tiktok_id: 7711137771133488405
  },
  {
    name: 'Escalinata Del Rodeo',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.543910633614!2d-104.91823702563232!3d21.525577580251273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427373c2ebfe59b%3A0x7cb1aa2378b0b3f8!2sEscalinata%20Del%20Rodeo!5e0!3m2!1ses-419!2smx!4v1795412487275!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdi42dgvfrVhhKbT3XH4mFsVp6XDh7ijGZe0EygIq5Q34x9kX08naWbkGHMaZLf5I78OJcbRiVdwxlRqZ5HJrbEfztLr1qyAFRYMHh5AiDRN20Xha8pgdppgtp0ORdrEO1Zdgc=w408-h546-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 1
      },
      {
        text: 'What is the main atraction of the place',
        time: 4
      }
    ],
    tiktok_id: 7711142491147341077
  },
  {
    name: 'Plaza Forum Tepic',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59384.704645153855!2d-104.95686210707379!3d21.525572504460115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427374050000001%3A0x5d6ee4d2367ebf60!2sPlaza%20Forum%20Tepic!5e0!3m2!1ses-419!2smx!4v1795412593214!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdC-jiYVow36Y0RDlRQaSQYj6PwK_eKBuQoXfB6SpSEbBliZ2xGm-ZRmKkRxLO8576T-GODP-UD4hIe0WcMFh4kVqx_uEcaHfgRPmdevqz5L6W_nE3bkh1fOvs36RlVRoBm_EFL7J-zW4uI=w408-h306-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 3
      },
      {
        text: 'Things that we can look for',
        time: 10
      },
      {
        text: 'Places inside to have a fun time',
        time: 20
      },
      {
        text: 'Main restaurants isnide it',
        time: 40
      }
    ],
    tiktok_id: 7711143636125158677
  },
  {
    name: 'Museo Regional de Nayarit',
    category: 'Museums',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.9403065272218!2d-104.89509062563253!3d21.51005798026254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736e393bd8f97%3A0xb100d741039c119e!2sMuseo%20Regional%20de%20Nayarit!5e0!3m2!1ses-419!2smx!4v1795412828037!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLff0eLz5v86FevT5x875Xzwtkc5UvTLRIRFUHKywVPvf_PzZAm102n_CMIdl8WiCk2yeBl4UKdSSkWP-EnOK0RI9kX_vokGRCUJI7zDiTu1hAxb5l62-ll6FjkpeiJfmUK2-Ods=w408-h306-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 1
      },
      {
        text: 'Things that we can look for here',
        time: 10
      },
      {
        text: 'What is dedicated to show',
        time: 20
      }
    ],
    tiktok_id: 7711145483497917716
  },
  {
    name: 'Parque Ecologico',
    category: 'Locations',
    google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14850.47445306886!2d-104.8594495!3d21.483476299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273745638e2417%3A0xf0e3c1ce96812331!2sParque%20Ecol%C3%B3gico%2C%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1795413085265!5m2!1ses-419!2smx',
    main_image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdB7r9bX-ZHtfFVU3byZC1OpK-yV4mHN0OKfLAE_P5p0dHRFSHUTb7ohxwFyH5-XRVo9Ei9v4ZZNvTPkR6TY2S66GxPTnNePmFJIfA3PQBPRKSrL3XHN2PBBROJtiNbtTtXlOk=w408-h544-k-no',
    time_staps: [
      {
        text: 'What is this place',
        time: 3
      },
      {
        text: 'Where is located',
        time: 8
      }
    ],
    tiktok_id: 7711145730961837333
  }
]

interface CategoryInfo {
  description: string
}

export const CATEGORIES_INFO: Record<PlaceCategory, CategoryInfo> = {
  Locations: { 
    description: 'In Tepicyork we have many locations like the Centro'
  },
  Cerro: {
    description: 'In Tepicyork we have two mains Cerros that you can hike'
  },
  Laguna: {
    description: 'In Tepicyork we have some water'
  },
  Museums: {
    description: 'In Tepicyork we have several museums at Centro'
  }
}