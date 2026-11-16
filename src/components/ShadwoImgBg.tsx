interface Props {
    src: string
    children: React.ReactNode
    height?: string
    shadow?: number
}

import './ShadowImgBg.css'

export const ShadowImgBg: React.FC<Props> = ({ src, children, height = '100vh', shadow = 8 })=> {
    return (
        <div 
            className='title-section'
            style={{ 
                height,
                backgroundImage: `
                    linear-gradient(rgba(0, 0, 0, 0.${shadow}),rgba(0, 0, 0, 0.${shadow})), 
                    url("${src}")`
            }}
        >
            {children}
        </div>
    )
}