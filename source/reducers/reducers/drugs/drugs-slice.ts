import { createSlice } from '@reduxjs/toolkit'

type Drugs = {
  id: number
  name: string
  description: string
  createdAt?: string
  updatedAt?: string
}

const drugsSlice = createSlice({
  name: 'drugs',
  initialState: [] as Drugs[],
  reducers: {
    drugAdded(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    },
  },
})

export const { drugAdded } = drugsSlice.actions
export default drugsSlice.reducer
