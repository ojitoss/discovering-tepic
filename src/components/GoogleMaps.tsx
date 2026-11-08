interface Props {
  url: string
}

export const GoogleMaps: React.FC<Props> = ({ url })=> {
  return (
    <iframe
      src={url}
      width="600"
      height="450"
      style={{ 
        border: 0,
        borderRadius: 5
      }}
      loading="lazy"
      allowFullScreen >
    </iframe>
  )
}
