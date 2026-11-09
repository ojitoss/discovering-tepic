import { useParams  } from 'react-router'
import { PLACES_INFO  } from '../../constants'
import { GoogleMaps } from '../components/GoogleMaps'

function SpecificPlace() {
  const { place } = useParams()
  console.log(place)
  const place_ = PLACES_INFO.find(place_info => place_info.name === place)

  return (
    <>
      <div style={{ marginBottom: 100  }}></div>
      <GoogleMaps url={place_.google_maps_url} />
    </>
  )
}

export default SpecificPlace
