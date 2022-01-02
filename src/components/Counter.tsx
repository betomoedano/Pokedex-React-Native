/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { increment, decrement, incrementByAmount } from '../features/counter/counter-slice';
import { PokemonClient } from 'pokenode-ts';

import styled from 'styled-components/native'

interface Props {
    color: string;
}

const Counter = () => {

    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();




    const CounterText = styled.Text<Props>`
        font-size: 50px;
        font-weight: bold;
        text-align: center;
        margin: 10px;
        color: ${props => props.color};
    `;
    const Wrapper = styled.View`
        justify-content: center;
        align-items: center;
    `;
    
    return (
        <Wrapper>
            <CounterText color='green'>{count}</CounterText>
            <Button title="Increase" onPress={() => dispatch(increment())} />
            <Button title="Decrease" onPress={() => dispatch(decrement())} />
            <Button title="Increment 10" onPress={() => dispatch(incrementByAmount(10))} />
        </Wrapper>
    );
};

export default Counter;
    