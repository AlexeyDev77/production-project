import { StateScheme } from 'app/providers/StoreProvider';
import { validateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileReadonly', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                validateError: [
                    validateProfileError.INCORRECT_USER_DATA,
                    validateProfileError.SERVER_ERROR,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateScheme)).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
            validateProfileError.SERVER_ERROR,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
    });
});
