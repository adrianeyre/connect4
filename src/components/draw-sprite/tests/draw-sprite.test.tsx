import React from 'react';
import { shallow } from 'enzyme';

import DrawSprite from '../draw-sprite';
import IDrawSpriteProps from '../interfaces/draw-sprite-props';
import Sprite from '../../../classes/sprite';
import SpriteTypeEnum from '../../../classes/enums/sprite-type-enum'
import ImageEnum from '../../../classes/enums/image-enum';

describe('Draw Sprite', () => {
	it('Should render correctly', () => {
		const defaultProps: IDrawSpriteProps = {
			sprite: new Sprite({
				key: 'sprite',
				visable: true,
				x: 1,
				y: 1,
				image: ImageEnum.Empty,
				type: SpriteTypeEnum.Empty,
			}),
			height: 10,
			width: 10,
			containerWidth: 100,
			handleClick: jest.fn(),
		};

		const drawSprite = shallow(<DrawSprite {...defaultProps} />);
		expect(drawSprite).toMatchSnapshot();
	});
});