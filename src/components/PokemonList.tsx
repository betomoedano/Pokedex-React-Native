/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemons } from "../features/pokemons/pokemonSlice";
import { increment, decrement, incrementByAmount, reset, decrementByAmount  } from "../features/counter/counter-slice";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";
import { PokemonClient } from "pokenode-ts";
import Pokemon from "../models/Pokemon";


interface Props {
    color: string;
    size?: string;
    mt?: string;
}

const PokemonList = () => {
    const currentPokemon = useAppSelector(state => state.pokemon);
    const counter = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    const isDarkMode = useColorScheme() === 'dark';


    useEffect(() => {
        fetchPokemon()
    }, [counter]);

    
    const fetchPokemon = async () => {
        const api = new PokemonClient()
        
        await api
        .getPokemonById(counter)
        .then(pokemon => {
            console.log(pokemon)
            const newPokemon: Pokemon = {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon?.sprites?.front_default?.toString(),
                height: pokemon.height,
                weight: pokemon.weight,
                type: pokemon?.types[0]?.type?.name?.toString(),
            }
            dispatch(setPokemons(newPokemon))
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleNextButton = () => {
        dispatch(increment())
        // fetchPokemon()
    }
    const handlePrevButton = () => {
        dispatch(decrement())
    }
    const handleIncrementByAmount = (value: number) => {
        dispatch(incrementByAmount(value))
    }
    const handleReset = () => {
        dispatch(reset())
    }
    const handleDecrementByAmount = (value: number) => {
        dispatch(decrementByAmount(value))
    }
    
    const PokemonListText = styled.Text<Props>`
        font-size: ${props => props.size || "50px"};
        font-weight: bold;
        text-align: center;
        padding: 5px;
        color: ${props => props.color};
        margin-top: ${props => props.mt || "0px"};
    `;
    const Wrapper = styled.View`
        justify-content: center;
        align-items: center;
    `;
    const PokemonImage = styled.Image`
        width: 200px;
        height: 300px;
        resize-mode: contain;
    `;
    const Button = styled.TouchableOpacity`
        background-color: #f0f0f0;
        padding: 10px;
        margin: 10px;
        border-radius: 20px;
    `;
    const DirectionRow = styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `;
    const InfoText = styled.Text<Props>`
        font-size: 18px;
        font-weight: bold;
        color: ${props => props.color};
        marginHorizontal: 20px;
        marginBottom: 10px;
    `;
    
    return (
        <Wrapper>
            {currentPokemon.image ? 
                <>
                <PokemonListText mt={'50px'} color={isDarkMode ? "#fff" : "green"}>{currentPokemon.name}</PokemonListText>
                <PokemonImage source={{ uri: currentPokemon.image }} />
                <DirectionRow>
                    <Wrapper>
                        <InfoText color="orange">{currentPokemon.height}</InfoText>
                        <InfoText color="orange">Height</InfoText>
                    </Wrapper>
                    <Wrapper>
                        <InfoText color="orange">{currentPokemon.weight}</InfoText>
                        <InfoText color="orange">Weight</InfoText>
                    </Wrapper>
                    <Wrapper>
                        <InfoText color="orange">{currentPokemon.type}</InfoText>
                        <InfoText color="orange">Type</InfoText>
                    </Wrapper>
                </DirectionRow>
                <InfoText color="gray">Pokemon No. {counter}</InfoText>
                <DirectionRow>
                    <Button onPress={() => handleDecrementByAmount(100)}><PokemonListText size="20px" color="#007aff">-100</PokemonListText></Button>
                    <Button onPress={handlePrevButton}><PokemonListText size="20px" color="#007aff">back</PokemonListText></Button>
                    <Button onPress={handleNextButton}><PokemonListText size="20px" color="#007aff">next</PokemonListText></Button>
                    <Button onPress={() => handleIncrementByAmount(100)}><PokemonListText size="20px" color="#007aff">+100</PokemonListText></Button>
                </DirectionRow>
                <Button onPress={() => handleReset()}><PokemonListText size="20px" color="#007aff">reset</PokemonListText></Button>

            </>
            : <PokemonListText color="red">Loading...</PokemonListText>}
        </Wrapper>
    );
};

export default PokemonList;
