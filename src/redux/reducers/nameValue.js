import { createSlice } from 'redux-starter-kit'

const name = createSlice({
  initialState: {
    value: '',
  },
  reducers: {
    setNameValue: (state, action) => {
      state.value = action.payload
    },
  },
})

const { actions, reducer } = name

export const { setNameValue } = actions

export default reducer
