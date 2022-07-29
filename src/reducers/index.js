import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import postReducer from './postReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
  listOrder: postsReducer,
  detailOrder: postReducer,
  comments: commentsReducer,
})

export default rootReducer
