import {
    profileActions, profileReducer, updateProfileData, validateProfileError,
} from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileSlice } from 'entities/Profile/model/slice/profileSlice';
import { ProfileScheme } from '../types/profile';

const data = {
    first: 'Алексей',
    lastname: 'Аброскин',
    age: 24,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
};

describe('profileSlice', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileScheme> = {
            readonly: true,
        };

        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadonly(false),
        )).toEqual({ readonly: false });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: 'alex' } };

        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({
                username: '777',
            }),
        )).toEqual({
            form: { username: '777' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateError: [validateProfileError.INCORRECT_USER_DATA],
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
            validateError: [validateProfileError.INCORRECT_USER_DATA],
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
