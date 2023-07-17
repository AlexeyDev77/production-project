import { Decorator } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState?: DeepPartial<StateScheme>):Decorator => (Story) => (
    <StoreProvider initialState={initialState}>
        <Story />
    </StoreProvider>
);
