import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '123',
            },
        };

        expect(getLoginPassword(state as StateScheme)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});
