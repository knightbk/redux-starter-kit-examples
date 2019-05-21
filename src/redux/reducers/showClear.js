import { createSlice } from 'redux-starter-kit'

const clearButton = createSlice({
  initialState: {
    show: false,
  },
  reducers: {
    setClearValue: (state, action) => {
      state.show = action.payload
    },
  },
})

const { actions, reducer } = clearButton

export const { setClearValue } = actions

export default reducer
