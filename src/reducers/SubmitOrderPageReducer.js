import { CREATE_SUCCEEDED, CREATE_REQUEST, CREATE_FAILED } from '../Actions';

export const submitorderReducer = (state, { type }) => {
  switch (type) {
    case CREATE_REQUEST:
      return { ...state, loading: true };
    case CREATE_SUCCEEDED:
      return { ...state, loading: false };
    case CREATE_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};
