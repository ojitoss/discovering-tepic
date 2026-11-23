export const parseNum = (n: number) => {
  return n > 10 ? `${n}` : `0${n}`
}

export const getParsedTime = (time: number): `${string}:${string}` => {
  const minutes = Math.trunc(time /  60)
  const seconds = time - (60 * minutes)

  return `${parseNum(minutes)}:${parseNum(seconds)}`
}

export const getFullPath = (pathType: 'root' | 'videos', path: string)=> {
  const cases = {
    root: '',
    videos: 'videos/'
  }

  return `${import.meta.env.BASE_URL}/${cases[pathType]}${path}`
}
