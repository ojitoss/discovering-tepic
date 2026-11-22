export const parseNum = (n: number) => {
  return n > 10 ? `${n}` : `0${n}`
}

export const getParsedTime = (time: number): `${string}:${string}` => {
  const minutes = time /  60
  const seconds = time - (60 * minutes)

  return `${parseNum(minutes)}:${parseNum(seconds)}`
}
