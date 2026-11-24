interface Props {
    review: ReviewType
}

import { useState } from 'react'
import { type Review as ReviewType } from '../../types.d'

export const Review: React.FC<Props> = ({ review })=> {
    const [translated, setTranslated] = useState(false)

    return <div style={{ background: '#311c53', borderRadius: '5px', padding: '10px', border: '3px solid #22104b' }}>
        <h4 style={{ fontSize: '30px' }}>{review.username}</h4>
        <p>
            {translated ? review.translated_msg : review.origin_msg}
        </p>
        <span onClick={()=> setTranslated(state => !state)} style={{ color: '#2c5799' }}>
            {translated ? 'Back to origin message' : 'Translate message to English'}
        </span>
    </div>
}