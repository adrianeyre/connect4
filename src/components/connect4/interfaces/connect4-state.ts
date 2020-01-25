import IGame from '../../../classes/interfaces/game';

export default interface IConnect4State {
	game: IGame;
	spriteWidth: number;
	spriteHeight: number;
	containerWidth: number
	containerHeight: number;
	containerMargin: number;
	boardWidth: number;
	boardHeight: number;
}
