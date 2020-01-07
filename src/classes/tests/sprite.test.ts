import SpriteTypeEnum from '../enums/sprite-type-enum';

import Sprite from '../sprite';
import ISpriteProps from '../interfaces/sprite-props';
import ImageEnum from 'classes/enums/image-enum';

describe('Sprite', () => {
	let defaultConfig: ISpriteProps

	beforeEach(() => {
		defaultConfig = {
			key: 'sprite',
			visable: true,
			x: 10,
			y: 10,
			image: ImageEnum.Player1,
			type: SpriteTypeEnum.Player1,
		}
	})

	it('Should create Sprite class', () => {
		const sprite = new Sprite(defaultConfig);

		expect(sprite.key).toEqual('sprite');
		expect(sprite.visable).toEqual(true);
		expect(sprite.x).toEqual(10);
		expect(sprite.y).toEqual(10);
		expect(sprite.zIndex).toEqual(5000);
		expect(sprite.image).toEqual('player1.png');
		expect(sprite.type).toEqual(SpriteTypeEnum.Player1);
	});

	it('Should update the image', () => {
		const sprite = new Sprite(defaultConfig);

		expect(sprite.image).toEqual('player1.png');
		sprite.updateImage(ImageEnum.Player2);
		expect(sprite.image).toEqual('player2.png');
	})

	it('Should update the type', () => {
		const sprite = new Sprite(defaultConfig);

		expect(sprite.type).toEqual(SpriteTypeEnum.Player1);
		sprite.updateType(SpriteTypeEnum.Player2);
		expect(sprite.type).toEqual(SpriteTypeEnum.Player2);
	})
});