import { Link, useParams  } from 'react-router'
import { useRef } from 'react'
import { PLACES_INFO  } from '../../constants'
import { GoogleMaps } from '../components/GoogleMaps'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import { TimeStap  } from '../components/TimeStap'
import { Details } from '../components/Details'
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
            <h1>"{place_.name}"</h1>
          </ShadowImgBg>

          <div className='container'>
            <div className='video-section'>
              <Details
                title={<h2>Video of the place "{place_.name}":</h2>}
              >
                <video
                  ref={videoRef}
                  controls
                  src={linkVideo}
                ></video>
              </Details>
            </div>

            <div className='time-staps-section'>
              <Details
                title={<h2>Time Staps:</h2>}
              >
                <ol className='time-staps'>
                  <li>
                    <TimeStap time={0} text='Start of the video' videoRef={videoRef} />
                  </li>
                  {TIME_STAPS.map((time_stap, i)=> (
                    <li key={i}>
                      <TimeStap time={time_stap.time} text={time_stap.text} videoRef={videoRef} />
                    </li>
                  ))}
                </ol>
              </Details>
            </div>

            <div className='map-section'>
              <Details
                title={<h2>Exact ubication of "{place_.name}":</h2>}
              >
                <GoogleMaps url={place_.google_maps_url} />
              </Details>
            </div>
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
