export const getParsedTime = (time: number): `0${number}:${number}` => {
  const minutes = time /  60
  const seconds = time - (60 * minutes)

  return `0${minutes}:${seconds}`
}
