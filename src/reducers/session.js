export default function session(state = { isLogin: false, user: {} }, action) {
  switch (action.type) {
    case 'UPDATE_SESSION':
      return { isLogin: !state.isLogin, user: action.payload };
    default:
      break;
  }
  return state;
}
