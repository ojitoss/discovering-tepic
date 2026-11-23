interface Props {
  time: number
  text: string
  videoRef: React.Ref<HTMLVideoElement>
}

import { getParsedTime  } from '../helper'

export const TimeStap: React.FC<Props> = ({ time, text, videoRef  })=> {
  const handleClik = ()=> {
    if (videoRef) {
      videoRef.current.currentTime = time
      videoRef.current.play()
    }
  }

  return (
    <div className="container-time-stap">
      <button onClick={handleClik}>{getParsedTime(time)}</button>
      <span>{text}</span>
    </div>
  )
}
