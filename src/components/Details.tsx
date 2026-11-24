import { useState } from "react"

interface Props {
    title: React.ReactNode
    children: React.ReactNode
}

export const Details: React.FC<Props> = ({ title, children })=> {
    const [show, setShow] = useState(true)

    const habdleClick = ()=> {
      setShow(show => !show)
    }

    return (
        <div>
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
              <span onClick={habdleClick}>{show ? '>' : 'v'}</span>
            </div>
            <span onClick={habdleClick}>{title}</span>
          </div>

          {show 
            ? <>{children}</>
            : <></>
          }
        </div>
    )
}
