import IPlayer from './player';
import ISprite from './sprite';

export default interface IGame {
	player: IPlayer[];
	sprites?: ISprite[];
	counterCount: number
	playerOn: boolean;
	isGameInPlay: boolean;
	boardWidth: number;
	boardHeight: number;
	handleInput(x: number): void;
}
