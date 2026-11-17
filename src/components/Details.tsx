import { useState } from "react"

interface Props {
    title: React.ReactNode
    children: React.ReactNode
}

export const Details: React.FC<Props> = ({ title, children })=> {
    const [show, setShow] = useState(true)

    return (
        <div onClick={()=> setShow(show => !show)}>
            {title}
            {show 
                ? 
                    <>
                        {children}
                    </>
                : <></>
            }
        </div>
    )
}