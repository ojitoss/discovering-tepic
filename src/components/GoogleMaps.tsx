interface Props {
  url: string
}

export function GoogleMaps({ url }: Props) {
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
