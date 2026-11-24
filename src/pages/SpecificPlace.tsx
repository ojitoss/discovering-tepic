import { Link, useParams  } from 'react-router'
import { useRef } from 'react'
import { PLACES_INFO  } from '../../constants'
import { GoogleMaps } from '../components/GoogleMaps'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import { TimeStap  } from '../components/TimeStap'
import { Details } from '../components/Details'
import { Review } from '../components/Review'
import { type TimeStaps } from '../../types.d'
import './SpecificPlace.css'

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

  const time_staps = place_?.time_staps ?? TIME_STAPS

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
                  {time_staps.map((time_stap, i)=> (
                    <li key={i}>
                      <TimeStap time={time_stap.time} text={time_stap.text} videoRef={videoRef} />
                    </li>
                  ))}
                </ol>
              </Details>
            </div>

            <div className='reviews-section'>
              <Details
                title={<h2>Reviews of "{place_.name}" ({place_.reviews?.length ?? 0})</h2>}
              >
                <p>
                  All reviews of this place (all of theses are in comments of uor Tik Tok page
                  you can visit the real tiktok video 
                   <a href={`https://www.tiktok.com/@discoveringtepic/video/${place_.tiktok_id}`}>here</a>)
                </p>
                <div className='reviews'>
                  {
                    place_.reviews?.length != undefined
                    ? place_.reviews.map((review, i)=> (
                      <Review key={i} review={review} />
                    ))
                    : <p>This place already have not a any review. Wait to the people make a review</p>
                  }
                </div>
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
