import { TEPIC_URL } from '../../constants'
import { GoogleMaps  } from '../components/GoogleMaps'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import './Home.css'
import { getFullPath  } from '../helper'

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

            <div>
              <h2>What is Tepic?</h2>
              <p>
                <b>Tepic</b> is the capital of the state of <b>Nayarit</b>, that is a state of the country of <b>Mexico</b>
                this municipe it have very interesnting and cultural places to visit
             </p>
            </div>

            <div className='tepic-map'>
                <GoogleMaps url={TEPIC_URL} />
            </div>
        </>
    )
}

export default App
