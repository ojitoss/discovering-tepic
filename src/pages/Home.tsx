import { TEPIC_URL } from '../../constants'
import { GoogleMaps  } from '../components/GoogleMaps'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import './Home.css'
import { getFullPath  } from '../helper'
import { Link } from 'react-router'

const TEPIC_LOGO = getFullPath('root', 'Tepic-logo.png')

function App() {
    return (
        <>
            <ShadowImgBg src='https://tse3.mm.bing.net/th/id/OIP.WM9PogW78MxCn8F7mPAiwQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'>
                <h1>
                    <span>Discovering</span>
                    <img src={TEPIC_LOGO} />
                </h1>
            </ShadowImgBg>

            <div className='whats-tepic'>
              <h2>What is Tepic?</h2>
              <p>
                <b>Tepic</b> is the capital of the state of <b>Nayarit</b>, that is a state of the 
                country of <b>Mexico</b> this municipe it have very interesnting and cultural places to 
                visit in this beatufil place.
                This website is designed to turistic people that wants
                to know more about Tepic
             </p>
            </div>

            <div className='places-to-visit'>
                <h2>Many places that we can visit</h2>
                <p>
                    Tepic have many interesting places that you can visit so,
                    in that website we want to show to you someone of that amazing places,
                    we have listed around 16 of them.
                </p>
                <Link to={'/places'} className='btn'>See more about places</Link>
                <a href='https://www.tiktok.com/@discoveringtepic'>Visit our TikTok page</a>
            </div>

            <div className='tepic-map'>
                <h3>Exact ubication of "Tepic":</h3>
                <GoogleMaps url={TEPIC_URL} />
            </div>
        </>
    )
}

export default App
