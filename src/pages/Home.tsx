import { TEPIC_URL } from '../../constants'
import { GoogleMaps  } from '../components/GoogleMaps'
import '../App.css'

function App() {
    return (
        <>
            <div className='title-section'>
                <h1>
                    <span>Discovering</span>
                    <img src={`${import.meta.env.BASE_URL}/Tepic-logo.png`} />
                </h1>
            </div>

            <div className='tepic-map'>
                <GoogleMaps url={TEPIC_URL} />
            </div>
        </>
    )
}

export default App
