import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass'))
            .toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2']))
            .toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass cls1 cls2 class3 class4';
        expect(classNames(
            'someClass',
            { class3: true, class4: true },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass cls1 cls2 class3';
        expect(classNames(
            'someClass',
            { class3: true, class4: false },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass cls1 cls2 class3';
        expect(classNames(
            'someClass',
            { class3: true, class4: undefined },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
});
