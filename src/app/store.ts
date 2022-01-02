/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import pokemonReducer from '../features/pokemons/pokemonSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemon: pokemonReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
// Typescript has a built-in type called ReturnType.
// if we add more slices to our store, this type uptdates automatically.
export type RootState = ReturnType<typeof store.getState>;