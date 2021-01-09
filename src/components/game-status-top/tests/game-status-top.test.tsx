import React from 'react';
import { shallow } from 'enzyme';

import GameStatusTop from '../game-status-top';
import IGameStatusTopProps from '../interfaces/game-status-top-props';

describe('Game Status Top', () => {
	it('Should render correctly', () => {
		const defaultProps: IGameStatusTopProps = {
			player1Score: 100,
			player2Score: 100,
			playerOn: true,
		};

		const gameStatus = shallow(<GameStatusTop {...defaultProps} />);
		expect(gameStatus).toMatchSnapshot();
	});
});