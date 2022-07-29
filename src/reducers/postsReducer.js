import * as actions from '../actions/postsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  listOrder: [],
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ORDERS:
      return { ...state, loading: true }
    case actions.GET_ORDERS_SUCCESS:
      return { listOrder: action.payload, loading: false, hasErrors: false }
    case actions.GET_ORDERS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
