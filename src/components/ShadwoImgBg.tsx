interface Props {
    src: string
    children: React.ReactNode
    height?: string
}

import './ShadowImgBg.css'

export const ShadowImgBg: React.FC<Props> = ({ src, children, height = '100vh' })=> {
    return (
        <div 
            className='title-section'
            style={{ 
                height,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url("${src}")`
            }}
        >
            {children}
        </div>
    )
}