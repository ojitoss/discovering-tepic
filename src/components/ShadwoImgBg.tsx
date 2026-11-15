interface Props {
    src: string
    children: React.ReactNode
}

import './ShadowImgBg.css'

export const ShadowImgBg: React.FC<Props> = ({ src, children })=> {
    return (
        <div 
            className='title-section'
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url("${src}")`
            }}
        >
            {children}
        </div>
    )
}