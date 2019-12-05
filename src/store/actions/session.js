export function updateSession(user) {
  return {
    type: 'UPDATE_SESSION',
    payload: user,
  };
}
