import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;
    profile: ProfileScheme;

    // Асинхронные редюсеры
    loginForm?: LoginScheme;
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManger {
    getReducerMap: () => ReducersMapObject<StateScheme>;
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add: (key: StateSchemeKey, reducer: Reducer) => void;
    remove: (key: StateSchemeKey) => void;
}

export interface ReduxStoreWithManger extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManger;
}
