import { Profile, validateProfileError } from '../../types/profile';

export const validateProfile = (profile?: Profile) => {
    if (!profile) {
        return [validateProfileError.NO_DATA];
    }

    const {
        first, lastname, age, country,
    } = profile;
    const errors: validateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(validateProfileError.INCORRECT_USER_DATA);
    }

    if (!age) {
        errors.push(validateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(validateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
