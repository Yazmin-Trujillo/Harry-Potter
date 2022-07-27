import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../services/DataService'

// Define a type for the slice state
interface FavoritesState {
    value: Character[]
}

// Define the initial state using that type
const initialState: FavoritesState = {
    value: [],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFavorites: (state, action: PayloadAction<Character>) => {
            if (state.value.length >= 5 || state.value.find(x => x.name === action.payload.name)) {
                return
            }
            const current = [...state.value]
            current.push(action.payload)
            state.value = current
        },

        deleteFavorites: (state, action: PayloadAction<Character>) => {

            const result = state.value.filter(x => x.name !== action.payload.name);
            state.value = result
        }

    },
})

export const { addFavorites, deleteFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer