// import { v4 as uuid } from 'uuid'

export const changeInput = (whatevah, id) => ({
  type: 'CHANGE_INPUT',
  // id: uuid(),
  id,
  leInput: whatevah
})
