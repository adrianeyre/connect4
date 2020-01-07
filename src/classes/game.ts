import Player from './player';
import IGame from './interfaces/game';
import IPlayer from './interfaces/player';
import ISprite from './interfaces/sprite';
import ImageEnum from './enums/image-enum';
import SpriteTypeEnum from './enums/sprite-type-enum';
import IConnect4Props from '../components/connect4/interfaces/connect4-props';
import Sprite from './sprite';

export default class Game implements IGame {
	public player: IPlayer[];
	public sprites: ISprite[];
	public counterCount: number
	public playerOn: boolean;
	public isGameInPlay: boolean;
	public boardWidth: number;
	public boardHeight: number;

	readonly BOARD_WIDTH: number = 7;
	readonly BOARD_HEIGHT: number = 6;
	readonly COUNTERS = this.BOARD_HEIGHT * this.BOARD_WIDTH;

	constructor(config: IConnect4Props) {
		this.player = [new Player({ key: 'player1'}), new Player({ key: 'player2'})];
		this.sprites = [];
		this.counterCount = 0;
		this.playerOn = true;
		this.isGameInPlay = false;
		this.boardWidth = this.BOARD_WIDTH;
		this.boardHeight = this.BOARD_HEIGHT;

		this.setupBoard();
	}

	public handleInput = (x: number): void => {
		const counters = this.sprites.filter((sprite: ISprite) => sprite.x === x && sprite.type !== SpriteTypeEnum.Empty);
		const y = this.boardHeight - counters.length;

		this.setCounter(x, y);
	}

	private setupBoard = () => {
		for (let y = 1; y <= this.boardHeight; y++) {
			for (let x = 1; x <= this.boardWidth; x++) {
				this.sprites.push(this.newSprite(`sprite-${ x }-${ y }`, x, y));
			}
		}
	}

	private newSprite = (key: string, x: number, y: number) => new Sprite({
		key,
		visable: true,
		x,
		y,
		image: ImageEnum.Empty,
		type: SpriteTypeEnum.Empty,
	})

	private setCounter = (x: number, y: number) => {
		if (y < 1) return;

		const sprite = this.sprites.find((sprite: ISprite) => sprite.x === x && sprite.y === y);
		if (!sprite) throw new Error(`No sprite found in position x: ${ x }, y: ${ y }`);

		sprite.updateImage(this.playerOn ? ImageEnum.Player1 : ImageEnum.Player2);
		sprite.updateType(this.playerOn ? SpriteTypeEnum.Player1:  SpriteTypeEnum.Player2);
		this.playerOn = !this.playerOn;
		this.counterCount ++;
	}
}
