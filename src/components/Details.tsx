import { useState } from "react"

interface Props {
    title: React.ReactNode
    children: React.ReactNode
}

export const Details: React.FC<Props> = ({ title, children })=> {
    const [show, setShow] = useState(true)

    return (
        <div onClick={()=> setShow(show => !show)}>
          <div
            style={{
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#f4f4f4'
              }}
            >
              {show ? '>' : 'v'}
            </div>
            {title}
          </div>

          {show 
            ? <>{children}</>
            : <></>
          }
        </div>
    )
}
