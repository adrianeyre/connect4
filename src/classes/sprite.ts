import ISpriteProps from './interfaces/sprite-props';
import ISprite from './interfaces/sprite';
import SpriteTypeEnum from './enums/sprite-type-enum';
import ImageEnum from './enums/image-enum';

import empty from '../images/empty.png';
import player1 from '../images/player1.png';
import player2 from '../images/player2.png';

export default class Sprite implements ISprite {
	public key: string;
	public visable: boolean;
	public x: number;
	public y: number;
	public zIndex: number;
	public image: string;
	public type: SpriteTypeEnum;

	readonly Z_INDEX: number = 5000;
	readonly playerImages = {
		empty,
		player1,
		player2,
	}

	constructor(config: ISpriteProps) {
		this.key = config.key;
		this.visable = config.visable;
		this.x = config.x;
		this.y = config.y;
		this.zIndex = this.Z_INDEX;
		this.image = this.playerImages[config.image];
		this.type = config.type;
	}

	public updateImage = (image: ImageEnum): string => this.image = this.playerImages[image];
	public updateType = (type: SpriteTypeEnum): SpriteTypeEnum => this.type = type;
}
