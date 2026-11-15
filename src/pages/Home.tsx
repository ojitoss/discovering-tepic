import { TEPIC_URL } from '../../constants'
import { GoogleMaps  } from '../components/GoogleMaps'
import { Img } from '../components/Img'
import { ShadowImgBg } from '../components/ShadwoImgBg'
import './Home.css'

function App() {
    return (
        <>
            <ShadowImgBg src='https://tse3.mm.bing.net/th/id/OIP.WM9PogW78MxCn8F7mPAiwQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'>
                <h1>
                    <span>Discovering</span>
                    <Img src='Tepic-logo.png' />
                </h1>
            </ShadowImgBg>

            <div className='tepic-map'>
                <GoogleMaps url={TEPIC_URL} />
            </div>
        </>
    )
}

export default App
