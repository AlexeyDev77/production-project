import { CounterScheme } from '../../model/types/counterScheme';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterScheme = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: CounterScheme = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
