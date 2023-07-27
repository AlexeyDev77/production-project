import { Decorator } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    initialState?: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>,
):Decorator => (Story) => (
    <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
