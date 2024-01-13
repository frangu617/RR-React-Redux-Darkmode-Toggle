import { createSlice } from "@reduxjs/toolkit"

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://rb.gy/zgiazx',
    textColor: '#fefefe'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://placekitten.com/200/300',
    textColor: '#000000'
}

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setDarkMode: () => mode1,
        setLightMode: () => mode2,
       
    }
})
    
export const { setDarkMode, setLightMode } = modeSlice.actions

export default modeSlice.reducer