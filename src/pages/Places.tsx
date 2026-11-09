import { PLACES_INFO  } from '../../constants'
import { type PlaceCategory } from '../../types.d'
import { Link } from 'react-router'
import './Places.css'

const CATEGORY_FILTERS: PlaceCategory[] = ['Location', 'Cerro', 'Laguna']

function Places() {
    return (
      <>
        <h1>Places to visiit in Tepicyork</h1>

        <div className='container'>
          <div className='categories'>
            {CATEGORY_FILTERS.map((category_filter, i)=> (
              <div key={i}>
                {category_filter}
                <input type='checkbox' checked />
              </div>
            ))}
          </div>
          <div className='places'>
            {PLACES_INFO.map((place_info, i) => {
              return (
                <Link
                  to={`/place/${place_info.name}`}
                  className='place'
                  key={i}  
                >
                  {place_info.name}
                </Link>
              )
            })}
          </div>
        </div>
      </>
    )
}

export default Places
