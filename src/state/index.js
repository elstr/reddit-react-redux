import { combineReducers } from 'redux'
import { posts,  } from './posts/reducer'
import { navigation } from './navigation/reducer'

const rootReducer = combineReducers({
  posts,
  navigation
})

export default rootReducer
