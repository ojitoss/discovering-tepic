interface Props {
  src: string
}

export const Img: React.FC<Props> = ({ src  })=> {
  return (
    <img src={`${import.meta.env.BASE_URL}/${src}`}  />
  )
}
