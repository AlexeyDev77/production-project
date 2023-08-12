import { StateScheme } from 'app/providers/StoreProvider';

export const getUserInitiated = (state: StateScheme) => state.user._initiated;
