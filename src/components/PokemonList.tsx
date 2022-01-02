/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setPokemons} from '../features/pokemons/pokemonSlice';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  decrementByAmount,
} from '../features/counter/counter-slice';
import {PokemonClient} from 'pokenode-ts';
import Pokemon from '../models/Pokemon';
import {
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  Text,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Colors} from '../colors';

const PokemonList = () => {
  const currentPokemon = useAppSelector(state => state.pokemon);
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const fetchPokemon = async () => {
      const api = new PokemonClient();
      await api
        .getPokemonById(counter)
        .then(pokemon => {
          console.log(pokemon);
          const newPokemon: Pokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon?.sprites?.front_default?.toString(),
            height: pokemon.height,
            weight: pokemon.weight,
            type: pokemon?.types[0]?.type?.name?.toString(),
            move: pokemon?.moves[0]?.move?.name?.toString(),
          };
          dispatch(setPokemons(newPokemon));
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchPokemon();
  }, [counter, dispatch]);

  const handleNextButton = () => {
    dispatch(increment());
  };
  const handlePrevButton = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = (value: number) => {
    dispatch(incrementByAmount(value));
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleDecrementByAmount = (value: number) => {
    dispatch(decrementByAmount(value));
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            currentPokemon.type === 'grass'
              ? Colors.grass
              : currentPokemon.type === 'fire'
              ? Colors.fire
              : currentPokemon.type === 'water'
              ? Colors.water
              : currentPokemon.type === 'electric'
              ? Colors.electric
              : currentPokemon.type === 'ice'
              ? Colors.ice
              : currentPokemon.type === 'fighting'
              ? Colors.fighting
              : currentPokemon.type === 'poison'
              ? Colors.poison
              : currentPokemon.type === 'ground'
              ? Colors.ground
              : currentPokemon.type === 'flying'
              ? Colors.flying
              : currentPokemon.type === 'psychic'
              ? Colors.psychic
              : currentPokemon.type === 'bug'
              ? Colors.bug
              : currentPokemon.type === 'rock'
              ? Colors.rock
              : currentPokemon.type === 'ghost'
              ? Colors.ghost
              : currentPokemon.type === 'dragon'
              ? Colors.dragon
              : currentPokemon.type === 'dark'
              ? Colors.dark
              : currentPokemon.type === 'steel'
              ? Colors.steel
              : currentPokemon.type === 'fairy'
              ? Colors.fairy
              : currentPokemon.type === 'normal'
              ? Colors.normal
              : Colors.black,
        },
      ]}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.pokeball}
        source={require('../images/Pokeball.png')}
      />
      <View style={styles.whiteSheet} />
      <SafeAreaView>
        {/* name and number */}
        <View style={styles.row}>
          <Text style={styles.pokemonName}>{currentPokemon.name} </Text>
          <Text
            style={[
              styles.pokemonName,
              {textAlign: 'right', marginRight: 20, fontSize: 25},
            ]}>
            #{currentPokemon.id}
          </Text>
        </View>
        {/* Image and buttons */}
        <View style={[styles.row, {height: 250}]}>
          <TouchableOpacity style={styles.button} onPress={handlePrevButton}>
            <Text style={styles.buttonText}>⬅️</Text>
          </TouchableOpacity>
          <Image
            style={styles.pokemonImage}
            source={{uri: currentPokemon.image}}
          />
          <TouchableOpacity style={styles.button} onPress={handleNextButton}>
            <Text style={styles.buttonText}>➡️</Text>
          </TouchableOpacity>
        </View>
        {/* Pokemon type */}
        <View
          style={[
            styles.pokemonTypeContainer,
            {
              alignSelf: 'center',
              backgroundColor:
                currentPokemon.type === 'grass'
                  ? Colors.grass
                  : currentPokemon.type === 'fire'
                  ? Colors.fire
                  : currentPokemon.type === 'water'
                  ? Colors.water
                  : currentPokemon.type === 'electric'
                  ? Colors.electric
                  : currentPokemon.type === 'ice'
                  ? Colors.ice
                  : currentPokemon.type === 'fighting'
                  ? Colors.fighting
                  : currentPokemon.type === 'poison'
                  ? Colors.poison
                  : currentPokemon.type === 'ground'
                  ? Colors.ground
                  : currentPokemon.type === 'flying'
                  ? Colors.flying
                  : currentPokemon.type === 'psychic'
                  ? Colors.psychic
                  : currentPokemon.type === 'bug'
                  ? Colors.bug
                  : currentPokemon.type === 'rock'
                  ? Colors.rock
                  : currentPokemon.type === 'ghost'
                  ? Colors.ghost
                  : currentPokemon.type === 'dragon'
                  ? Colors.dragon
                  : currentPokemon.type === 'dark'
                  ? Colors.dark
                  : currentPokemon.type === 'steel'
                  ? Colors.steel
                  : currentPokemon.type === 'fairy'
                  ? Colors.fairy
                  : currentPokemon.type === 'normal'
                  ? Colors.normal
                  : Colors.black,
            },
          ]}>
          <Text
            style={{
              color: Colors.white,
              paddingHorizontal: 10,
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            {currentPokemon.type}
          </Text>
        </View>
        {/* Pokemon About */}
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 20,
              color: Colors.mediumGray,
            }}>
            About
          </Text>
          <View style={[styles.row, {justifyContent: 'center', marginTop: 20}]}>
            <View style={{alignItems: 'center', marginHorizontal: 10}}>
              <Text>
                ⚖️{' '}
                {currentPokemon.weight
                  ?.toString()
                  .slice(0, currentPokemon.weight.toString().length - 1)}
                ,
                {currentPokemon.weight
                  ?.toString()
                  .slice(
                    currentPokemon.weight.toString().length - 1,
                    currentPokemon.weight.toString().length,
                  )}{' '}
                kg
              </Text>
              <Text
                style={{color: Colors.mediumGray, fontSize: 12, marginTop: 10}}>
                Weight
              </Text>
            </View>
            <View style={{alignItems: 'center', marginHorizontal: 10}}>
              <Text>
                📏{' '}
                {currentPokemon.height
                  ?.toString()
                  .slice(0, currentPokemon.height.toString().length - 1)}
                ,
                {currentPokemon.height
                  ?.toString()
                  .slice(
                    currentPokemon.height.toString().length - 1,
                    currentPokemon.height.toString().length,
                  )}{' '}
                m
              </Text>
              <Text
                style={{color: Colors.mediumGray, fontSize: 12, marginTop: 10}}>
                Height
              </Text>
            </View>
            <View style={{alignItems: 'center', marginHorizontal: 10}}>
              <Text>{currentPokemon.move}</Text>
              <Text
                style={{color: Colors.mediumGray, fontSize: 12, marginTop: 10}}>
                Move
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.fire,
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
  pokeball: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  pokemonName: {
    fontSize: 35,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: Colors.white + '70',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.black,
  },
  pokemonTypeContainer: {
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteSheet: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    width: '95%',
    height: '60%',
  },
});
