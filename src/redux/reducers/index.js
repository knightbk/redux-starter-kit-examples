import { createSlice } from 'redux-starter-kit'

const root = createSlice({
  slice: 'root',
  initialState: {
    nameValue: '',
    showClear: false,
  },
  reducers: {
    setNameValue: (state, action) => {
      state.nameValue = action.payload
    },
  },
})

const { actions, reducer } = root

export const { setNameValue } = actions

export default reducer
