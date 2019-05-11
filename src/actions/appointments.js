export function addAppointment(appointment) {
  return {
    type: 'ADD_APPOINTMENT',
    payload: appointment,
  };
}

export function fetchAppointmnts() {
  return {
    type: 'FETCH_APPOINTMENTS',
  };
}
