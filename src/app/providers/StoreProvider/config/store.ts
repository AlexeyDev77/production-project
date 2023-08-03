import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { CombinedState, Reducer } from 'redux';
import { authMiddleware } from './middlewares/authMiddleware/authMiddleware';
import { createReducerManager } from './reducerManger';
import { StateScheme, ThunkExtraArg } from './StateScheme';

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reduceManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reduceManager.reduce as Reducer<CombinedState<StateScheme>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(authMiddleware),
    });
    // @ts-ignore
    store.reducerManager = reduceManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
