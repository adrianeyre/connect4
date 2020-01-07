import IPlayerProps from './interfaces/player-props';

import IPlayer from './interfaces/player';

export default class Player implements IPlayer {
	public key: string;
	public score: number;

	constructor(config: IPlayerProps) {
		this.key = config.key;
		this.score = 0;
	}

	public addScore = (): number => this.score ++;
}
