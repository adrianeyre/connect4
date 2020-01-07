import Player from '../player';

describe('Player', () => {
	it('Should create Player class', () => {
		const player = new Player({ key: 'player'});

		expect(player.key).toEqual('player');
		expect(player.score).toEqual(0);
	});
});