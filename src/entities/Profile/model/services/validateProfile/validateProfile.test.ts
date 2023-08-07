import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfile } from './validateProfile';
import { validateProfileError } from '../../types/profile';

const data = {
    first: 'Алексей',
    lastname: 'Аброскин',
    age: 24,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
};

describe('validateProfile', () => {
    test('success', async () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfile({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfile({ ...data, age: undefined });

        expect(result).toEqual([
            validateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfile({ ...data, country: undefined });

        expect(result).toEqual([
            validateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfile({});

        expect(result).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
            validateProfileError.INCORRECT_AGE,
            validateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('empty data', async () => {
        const result = validateProfile();

        expect(result).toEqual([
            validateProfileError.NO_DATA,
        ]);
    });
});
