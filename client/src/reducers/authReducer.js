import {SIGN_IN, SIGN_OUT} from '../actions/types'

const firstState = {
  isSignedIn: null,
  userId: null
};

export default (state = firstState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true , userId: action.payload};
    case SIGN_OUT:
      return { ...state, isSIgnedIn: false, userId: null};
    default:
      return state;
  }
};
