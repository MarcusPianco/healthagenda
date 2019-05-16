import { getListAppointments } from '../services/AppointmentsServiceAPI';

export default function apointments(state = [...getListAppointments()], action) {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return [...state, action.payload];

    case 'FETCH_APPOINTMENT':
      return state;

    default:
      break;
  }
  return state;
}
