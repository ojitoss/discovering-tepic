import { Link, useParams  } from 'react-router'
import { PLACES_INFO  } from '../../constants'
import { GoogleMaps } from '../components/GoogleMaps'
import './SpecificPlace.css'

function SpecificPlace() {
  const { place } = useParams()
  console.log(place)
  const place_ = PLACES_INFO.find(place_info => place_info.name === place)

  return (
    <>
      <div style={{ marginBottom: 100  }}></div>
      {place_ !== undefined ?
        <GoogleMaps url={place_.google_maps_url} />
        : <div className='invalid-place'>
           <span>'{place}'</span> is not a valid place to found
           <Link to='/places' className='link'>Click here to see places that you can visit in Tepic</Link>
          </div>
      }
    </>
  )
}

export default SpecificPlace
