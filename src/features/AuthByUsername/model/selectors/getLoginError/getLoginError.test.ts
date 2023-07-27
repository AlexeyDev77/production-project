import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                error: 'Ошибка',
            },
        };

        expect(getLoginError(state as StateScheme)).toEqual('Ошибка');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginError(state as StateScheme)).toEqual(undefined);
    });
});
