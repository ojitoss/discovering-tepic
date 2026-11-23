import { Link, useParams  } from 'react-router'
import { useRef } from 'react'
import { PLACES_INFO  } from '../../constants'
import { GoogleMaps } from '../components/GoogleMaps'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import { TimeStap  } from '../components/TimeStap'
import './SpecificPlace.css'

interface TimeStaps {
  text: string
  time: number
}

const TIME_STAPS: TimeStaps[] = [
  {
    text: 'Video start',
    time: 3
  },
  {
    text: 'See water',
    time: 16
  }
]

function SpecificPlace() {
  const { place } = useParams()
  const videoRef = useRef(null)

  const place_ = PLACES_INFO.find(place_info => place_info.name === place)
  const linkVideo = `${import.meta.env.BASE_URL}/videos/${place_?.name.replaceAll(' ', '-')}.mp4`

  return (
    <>
      {place_ !== undefined ?
        <>
          <ShadowImgBg src={place_.main_image}>
            <h1>{place_.name}</h1>
          </ShadowImgBg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
            <video
              ref={videoRef}
              controls
              src={linkVideo}
            ></video>

            <ol>
              {TIME_STAPS.map((time_stap, i)=> (
                <li key={i}>
                  <TimeStap time={time_stap.time} text={time_stap.text} videoRef={videoRef} />
                </li>
              ))}
            </ol>

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
