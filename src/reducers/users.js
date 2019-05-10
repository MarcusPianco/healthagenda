export default function users(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];

    default:
      break;
  }
  return state;
}
