// TODO: create a store here
import { configureStore } from 'redux-starter-kit'
import showClearReducer from '../reducers/showClear'
import nameValueReducer from '../reducers/nameValue'

const store = configureStore({
  reducer: {
    clearButton: showClearReducer,
    name: nameValueReducer,
  },
})

export default store
