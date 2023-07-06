import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from '../config/StateScheme';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateScheme>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateScheme);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
