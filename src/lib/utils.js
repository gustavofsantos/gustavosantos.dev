export const chooseOne = (array) => {
  const length = array.length
  const index = Math.round(Math.random() * 10) % length
  return array[index]
}