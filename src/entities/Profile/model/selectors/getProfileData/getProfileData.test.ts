import { StateScheme } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should work with filled state', () => {
        const data = {
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
                data,
            },
        };

        expect(getProfileData(state as StateScheme)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
