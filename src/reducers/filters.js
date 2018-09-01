import { 
  APPLY_FILTERS
} from 'actions/types';

const INITIAL_STATE = {
  sizeValue: { min: 0, max: 2000 },
  rentValue: { min: 0, max: 40000 },
  photosAvailable: false,
  sortOnPrice: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPLY_FILTERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};