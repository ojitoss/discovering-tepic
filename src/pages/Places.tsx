import { PLACES_INFO  } from '../../constants'
import { Link } from 'react-router'
import './Places.css'

function Places() {
    return (
      <>
        <h1>Places to visiit in Tepicyork</h1>

        <div className='container'>
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
      </>
    )
}

export default Places
