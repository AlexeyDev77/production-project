import {
    StateScheme, StateSchemeKey, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateScheme';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateScheme,
    StateSchemeKey,
    ThunkConfig,
    ReduxStoreWithManager,
    AppDispatch,
};
