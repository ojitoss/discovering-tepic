interface Props {
  url: string
}

import './GoogleMaps.css'

export const GoogleMaps: React.FC<Props> = ({ url })=> {
  return (
    <iframe
      src={url}
      loading="lazy"
      allowFullScreen >
    </iframe>
  )
}
