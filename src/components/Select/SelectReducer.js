export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_SELECT':
      return {
        ...state,
        [action.id]: action.value
      }
    default:
      return state
  }
}
