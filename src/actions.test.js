
import {GENERATE_AURAL_UPDATE, 
		generateAuralUpdate,
		RESTART_GAME,
		restartGame,
		MAKE_GUESS,
		makeGuess} from './actions';

describe('Should return actions', () => {
	it('Should return generateAuralUpdate', () => {
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	});

	it('Should return restantGame', () => {
		const correctAnswer = 10;
		const action = restartGame(correctAnswer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(correctAnswer);
	});

	it('Should return makeGuess', () => {
		const guess = 20;
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	})
})