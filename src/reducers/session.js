export default function session(state = { isLogin: false, userName: '' }, action) {
  switch (action.type) {
    case 'UPDATE_SESSION':
      return { isLogin: true, userName: action.payload.name };
    default:
      break;
  }
  return state;
}
