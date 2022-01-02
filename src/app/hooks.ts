/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';


// here we are exporting two hooked variables that have the right typescript types defined.
// and in our components we are going to import these hooks from the hooks file 
// insted of importing the base functions from react-redux.

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;