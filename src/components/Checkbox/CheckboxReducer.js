export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHECKBOX':
      return {
        ...state,
        [action.id]: action.value
      }
    default:
      return state
  }
}
