import { 
  FETCH_PROPERTIES
} from 'actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return action.payload;
    default:
      return state;
  }
};