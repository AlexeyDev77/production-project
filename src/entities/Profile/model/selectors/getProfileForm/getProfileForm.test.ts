import { StateScheme } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should work with filled state', () => {
        const form = {
            first: 'Алексей',
            lastname: 'Аброскин',
            age: 24,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
        };

        const state: DeepPartial<StateScheme> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateScheme)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getProfileForm(state as StateScheme)).toEqual(undefined);
    });
});
