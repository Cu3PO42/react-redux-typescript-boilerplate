import createActionCreator from '../utils/createActionCreator';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const incrementCounter = createActionCreator(INCREMENT_COUNTER, () => null);
export const decrementCounter = createActionCreator(DECREMENT_COUNTER, () => null);
