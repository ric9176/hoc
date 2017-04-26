import { CHANGE_AUTH } from '../actions/types';

const authenticationReducer = (state=false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authenticationReducer;
