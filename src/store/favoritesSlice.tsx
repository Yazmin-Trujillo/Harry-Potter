import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../services/DataService'

// Define a type for the slice state
interface FavoritesState {
    value: Character[]
}

// Define the initial state using that type
const initialState: FavoritesState = {
    value: [{
        "name": "Harry Potter",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "31-07-1980",
        "yearOfBirth": 1980,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "black",
        "wand": {
            "wood": "holly",
            "core": "phoenix feather",
            "length": 11
        },
        "patronus": "stag",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Daniel Radcliffe",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/harry.jpg"
    },
    {
        "name": "Hermione Granger",
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "19-09-1979",
        "yearOfBirth": 1979,
        "ancestry": "muggleborn",
        "eyeColour": "brown",
        "hairColour": "brown",
        "wand": {
            "wood": "vine",
            "core": "dragon heartstring",
            "length": 0
        },
        "patronus": "otter",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Emma Watson",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
    },
    {
        "name": "Ron Weasley",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "01-03-1980",
        "yearOfBirth": 1980,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "red",
        "wand": {
            "wood": "willow",
            "core": "unicorn tail-hair",
            "length": 14
        },
        "patronus": "Jack Russell terrier",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Rupert Grint",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/ron.jpg"
    }],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Character>) => {
            const current = [...state.value]
            const result = current.filter(x => x.name == action.payload.name);

            if (result.length === 0 && current.length < 5) {
                current.push(action.payload)
                state.value = current
            } else {
                return
            }

        }

    },
})

export const { add } = favoritesSlice.actions

export default favoritesSlice.reducer