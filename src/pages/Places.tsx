import { PLACES_INFO, CATEGORY_INDEXES  } from '../../constants'
import { type PlaceCategory } from '../../types.d'
import { Link } from 'react-router'
import './Places.css'

const CATEGORY_FILTERS: PlaceCategory[] = ['Locations', 'Cerro', 'Laguna', 'Museums']

function Places() {
  return (
      <>
        <h1>Places to visit in Tepicyork</h1>

        <div className='container'>
          {CATEGORY_FILTERS.map(category => (
            <>
              <h3>{category}:</h3>
              {PLACES_INFO.filter((_, i)=> CATEGORY_INDEXES[category].includes(i)).map((place, i) => (
                <Link
                  to={`/place/${place.name}`}
                  className='place'
                  key={i} 
                >
                  <img src={place.main_image} />
                  {place.name}
                </Link>
              ))}
            </>
          ))}
        </div>
      </>
    )
}

export default Places
