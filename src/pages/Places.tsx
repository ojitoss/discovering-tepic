import { PLACES_INFO  } from '../../constants'
import './Places.css'

function Places() {
    return (
      <>
        <h1>Places to visiit in Tepicyork</h1>

        <div className='container'>
          {PLACES_INFO.map((place_info, i) => {
            return (
              <span
              className='place'
                key={i}  
              >
                {place_info.name}
              </span>
            )
          })}
        </div>
      </>
    )
}

export default Places
