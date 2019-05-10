export default function apointment(state = [], action) {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return [...state, action.payload];

    default:
      break;
  }
  return state;
}
