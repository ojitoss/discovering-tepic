import { TEPIC_URL } from '../../constants'
import { GoogleMaps  } from '../components/GoogleMaps'
import { Img } from '../components/Img'
import './Home.css'

function App() {
    return (
        <>
            <div className='title-section'>
                <h1>
                    <span>Discovering</span>
                    <Img src='Tepic-logo.png' />
                </h1>
            </div>

            <div className='tepic-map'>
                <GoogleMaps url={TEPIC_URL} />
            </div>
        </>
    )
}

export default App
