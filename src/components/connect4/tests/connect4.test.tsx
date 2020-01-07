import React from 'react';
import { shallow } from 'enzyme';

import Connect4 from '../connect4';
import IConnect4Props from '../interfaces/connect4-props';

describe('Connect 4', () => {
	it('Should render correctly', () => {
		const defaultProps: IConnect4Props = {};
		const connect4 = shallow(<Connect4 {...defaultProps} />);
		expect(connect4).toMatchSnapshot();
	});
});