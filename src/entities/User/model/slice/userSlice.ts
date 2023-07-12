import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from '../types/userScheme';

const initialState: UserScheme = {

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
