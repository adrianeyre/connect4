import Player from './player';
import IGame from './interfaces/game';
import IPlayer from './interfaces/player';
import ISprite from './interfaces/sprite';
import ImageEnum from './enums/image-enum';
import SpriteTypeEnum from './enums/sprite-type-enum';
import GameEnum from './enums/game-enums';
import IConnect4Props from '../components/connect4/interfaces/connect4-props';
import Sprite from './sprite';

export default class Game implements IGame {
	public players: IPlayer[];
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
		this.players = [new Player({ key: 'player1'}), new Player({ key: 'player2'})];
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

		const result = this.checkBoard(x, y);

		switch (result) {
			case GameEnum.Player1Win:
				this.gameWon(0); break;
			case GameEnum.Player2Win:
				this.gameWon(1); break;
			case GameEnum.NoMoreSpaces:
				this.gameWon(2); break;
		}
	}

	private setupBoard = () => {
		this.sprites = [];

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

	private checkBoard = (x: number, y: number): GameEnum => {
		if (y < 1) return GameEnum.InvalidMove;

		const sprite = this.sprites.find((sprite: ISprite) => sprite.x === x && sprite.y === y);
		const player = this.currentPlayer()
		const image = this.playerImage();
		
		if (!sprite) throw new Error(`No sprite found in position x: ${ x }, y: ${ y }`);

		this.updateSprite(sprite, player, image);
		
		if (
			this.isHorizontalWin(x, y, player) ||
			this.isVerticalWin(x, y, player) ||
			this.isRightDiagonalWin(x, y, player) ||
			this.isLeftDiagonalWin(x, y, player)
		) return this.winner();

		if (this.addCounter()) return GameEnum.NoMoreSpaces;

		this.nextPlayer();
		
		return GameEnum.Played;
	}

	private currentPlayer = (): SpriteTypeEnum => this.playerOn ? SpriteTypeEnum.Player1:  SpriteTypeEnum.Player2
	private winner = (): GameEnum => this.playerOn ? GameEnum.Player1Win : GameEnum.Player2Win
	private nextPlayer = (): boolean => this.playerOn = !this.playerOn;
	private playerImage = (): ImageEnum => this.playerOn ? ImageEnum.Player1 : ImageEnum.Player2;
	private resetCounter = (): number => this.counterCount = 0;

	private updateSprite = (sprite: ISprite, player: SpriteTypeEnum, image: ImageEnum): void => {
		sprite.updateImage(image);
		sprite.updateType(player);
	}

	private addCounter = (): boolean => {
		this.counterCount ++;
		return this.counterCount >= this.COUNTERS;
	}

	private gameWon = (player: number) => {
		if (player < 2 ) this.players[player].addScore();
		this.resetCounter();
		this.setupBoard();
	}

	private isHorizontalWin = (xPos: number, yPos: number, player: SpriteTypeEnum): boolean => {
		let count = 1

		for (let x = xPos + 1; x <= this.boardWidth; x++) {
			const sprite = this.findSprite(x, yPos, player);

			if (!sprite) break;
			count ++;
		}

		for (let x = xPos - 1; x >= 1; x--) {
			const sprite = this.findSprite(x, yPos, player);

			if (!sprite) break;
			count ++;
		}

		return count > 3;
	}

	private isVerticalWin = (xPos: number, yPos: number, player: SpriteTypeEnum): boolean => {
		let count = 1

		for (let y = yPos + 1; y <= this.boardHeight; y++) {
			const sprite = this.findSprite(xPos, y, player);

			if (!sprite) break;
			count ++;
		}

		for (let y = yPos - 1; y >= 1; y--) {
			const sprite = this.findSprite(xPos, y, player);

			if (!sprite) break;
			count ++;
		}

		return count > 3;
	}

	private isRightDiagonalWin = (xPos: number, yPos: number, player: SpriteTypeEnum): boolean => {
		let count = 1

		for (let pos = 1; pos <= 3; pos++) {
			const sprite = this.findSprite(xPos + pos, yPos + pos, player);

			if (!sprite) break;
			count ++;
		}

		for (let pos = 1; pos <= 3; pos++) {
			const sprite = this.findSprite(xPos - pos, yPos - pos, player);

			if (!sprite) break;
			count ++;
		}

		return count > 3;
	}

	private isLeftDiagonalWin = (xPos: number, yPos: number, player: SpriteTypeEnum): boolean => {
		let count = 1

		for (let pos = 1; pos <= 3; pos++) {
			const sprite = this.findSprite(xPos + pos, yPos - pos, player);

			if (!sprite) break;
			count ++;
		}

		for (let pos = 1; pos <= 3; pos++) {
			const sprite = this.findSprite(xPos - pos, yPos + pos, player);

			if (!sprite) break;
			count ++;
		}

		return count > 3;
	}

	private findSprite = (x: number, y: number, player: SpriteTypeEnum): ISprite | undefined => this.sprites.find((sprite: ISprite) => sprite.x === x && sprite.y === y && sprite.type === player);
}
