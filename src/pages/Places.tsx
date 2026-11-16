import { PLACES_INFO, CATEGORIES_INFO  } from '../../constants'
import { type PlaceCategory } from '../../types.d'
import { Link } from 'react-router'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import './Places.css'

const CATEGORY_FILTERS: PlaceCategory[] = ['Locations', 'Cerro', 'Laguna', 'Museums']

function Places() {
  return (
      <>
        <ShadowImgBg src='https://th.bing.com/th/id/R.3a61fec27ce00955a67457dfc626c9cf?rik=WmiqnbCuay2XWA&pid=ImgRaw&r=0'>
          <h1>Places to visit in Tepicyork</h1>
        </ShadowImgBg>

        <div className='container'>
          {CATEGORY_FILTERS.map(category => (
            <>
              <h3>{category}:</h3>
              <span>{CATEGORIES_INFO[category].description}</span>
              <div className="places">
                {PLACES_INFO.filter((_, i)=> CATEGORIES_INFO[category].places_info_indexes.includes(i)).map((place, i) => (
                  <ShadowImgBg src={place.main_image} height='100%'>
                    <Link
                      to={`/place/${place.name}`}
                      className='place'
                      key={i} 
                    >
                        {place.name}
                    </Link>
                    </ShadowImgBg>
                ))}
              </div>
            </>
          ))}
        </div>
      </>
    )
}

export default Places
