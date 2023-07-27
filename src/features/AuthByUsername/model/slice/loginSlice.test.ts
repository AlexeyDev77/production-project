import { DeepPartial } from '@reduxjs/toolkit';
import { LoginScheme } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginScheme> = {
            username: '123',
        };

        expect(loginReducer(
            state as LoginScheme,
            loginActions.setUsername('321'),
        )).toEqual({ username: '321' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginScheme> = {
            password: '123',
        };

        expect(loginReducer(
            state as LoginScheme,
            loginActions.setPassword('777'),
        )).toEqual({ password: '777' });
    });
});
