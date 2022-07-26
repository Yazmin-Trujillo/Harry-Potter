import axios from "axios";

export const dataService = {

    getCharacters: async (): Promise<Character[]> => {
        const response = await axios.get('http://localhost:3004/characters');
        const charcters = response.data;
        return charcters
    },

    createCharacter:async (name:string, dateOfBirth:string, eyeColour:string, hairColour:string, gender:string, hogwartsStudent:boolean, hogwartsStaff:boolean): Promise<Character> => {
        const profile = {name, dateOfBirth, eyeColour, hairColour,gender,hogwartsStudent,hogwartsStaff}
        const response = await axios.post('http://localhost:3004/characters', profile) ;
        const character = response.data
        return character
    }


    // createProduct: async (name: string, description: string = '', price: number | null, type: string = '', category: string = ''): Promise<Product> => {
    //     try {
    //         const article = { name, description, price, type, category }
    //         const response = await axios.post('https://j-burguer-api.herokuapp.com/api/v1/products', article, { headers: { "Authorization": `Bearer ${token}` } });
    //         const product = response.data
    //         return product
    //     } catch (error) {
    //         console.error(error);
    //         throw error
    //     }
    // },
}

export interface Character {
    name: string
    species: string
    gender: string
    house: string
    dateOfBirth: string
    yearOfBirth: number
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: Wand
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alive: boolean
    image: string

}

export interface Wand {
    wood: string
    core: string
    length: number
}