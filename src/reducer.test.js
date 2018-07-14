

import {generateAuralUpdate,
		restartGame,
		makeGuess} from './actions';

import reducer from './reducer';

describe('Should return correct state', () => {
	const initialState = {
	    guesses: [],
	    feedback: 'Make your guess!',
	    auralStatus: '',
	    correctAnswer: Math.round(Math.random() * 100) + 1
	};

	it('Should return state for unknown action', () => {
		const state = reducer(undefined, {type:'_UNKNOWN'});
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.auralStatus).toEqual('');
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
	});

	it('Should return the current state on unknown action', () => {
		const state = reducer(initialState, {type: '_UNKNOWN'});
		expect(state.guesses).toEqual([])
	});

	describe('restartGame', () => {
		it('Should start a new game', () => {
			let state = {
				guesses: [1, 2, 3, 4],
				feedback: 'Awesome',
				correctAnswer: 4
			}
			const correctAnswer = 10;

			state = reducer(state, restartGame(correctAnswer));
			expect(state.guesses).toEqual([]);
			expect(state.feedback).toEqual('Make your guess!');
			expect(state.correctAnswer).toEqual(correctAnswer);
			expect(state.auralStatus).toEqual('');
		});
	}) ;

	describe('makeGuess', () => {
		it('Should make a guess', () => {
			let state = {
				guesses: [],
				feedback: '',
				correctAnswer: 100
			};
			state = reducer(state, makeGuess(25));
			expect(state.guesses).toEqual([25]);
			expect(state.feedback).toEqual("You're Ice Cold...");

		})
	})
})

