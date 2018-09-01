import axios from 'axios';

import {
  FETCH_PROPERTIES,
  APPLY_FILTERS
} from 'actions/types';

const { REACT_APP_BASE_API_PATH } = process.env;

export const fetchProperties = () => async (dispatch) => {
  const url = `${REACT_APP_BASE_API_PATH}/fetchProperties`;
  const { data } = await axios.get(url);

  dispatch({
    type: FETCH_PROPERTIES,
    payload: data.data
  });
};

export const applyFilters = (filters) => (dispatch) => {
  dispatch({
    type: APPLY_FILTERS,
    payload: filters
  });
}
