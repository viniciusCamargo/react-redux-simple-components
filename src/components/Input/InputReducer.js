export default (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.id]: action.leInput
      }
    default:
      return state
  }
}
