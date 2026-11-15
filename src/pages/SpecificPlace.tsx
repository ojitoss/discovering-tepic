import { Link, useParams  } from 'react-router'
import { PLACES_INFO  } from '../../constants'
import { GoogleMaps } from '../components/GoogleMaps'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import './SpecificPlace.css'

function SpecificPlace() {
  const { place } = useParams()
  console.log(place)
  const place_ = PLACES_INFO.find(place_info => place_info.name === place)

  return (
    <>
      {place_ !== undefined ?
        <>
          <ShadowImgBg src={place_.main_image}>
            <h1>{place_.name}</h1>
          </ShadowImgBg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
            <GoogleMaps url={place_.google_maps_url} />
          </div>
        </>
        : <div className='invalid-place'>
           <span>'{place}'</span> is not a valid place to found
           <Link to='/places' className='link'>Click here to see places that you can visit in Tepic</Link>
          </div>
      }
    </>
  )
}

export default SpecificPlace
