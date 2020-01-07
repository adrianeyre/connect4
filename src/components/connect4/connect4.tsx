import React from 'react';
import Game from '../../classes/game';
import ISprite from '../../classes/interfaces/sprite';
import IConnect4Props from './interfaces/connect4-props';
import IConnect4State from './interfaces/connect4-state';
import GameStatusTop from '../game-status-top/game-status-top';
import DrawSprite from '../draw-sprite/draw-sprite';
import InfoBoard from '../info-board/info-board';

import './styles/connect4.scss';

export default class Connect4 extends React.Component<IConnect4Props, IConnect4State> {
	private container: any;

	constructor(props: IConnect4Props) {
		super(props);

		this.state = {
			spriteWidth: 0,
			spriteHeight: 0,
			containerWidth: 800,
			containerHeight: 800,
			boardWidth: 0,
			boardHeight: 0,
			game: new Game(this.props),
		}

		this.styleContainer = this.styleContainer.bind(this);
	}

	public async componentDidMount() {
		this.updatePlayerArea();
		window.addEventListener('resize', this.updatePlayerArea);
	}

	public async componentWillUnmount() {
		window.removeEventListener('resize', this.updatePlayerArea);
	}

	public render() {
		return <div className="connect4-play-container" ref={(d) => { this.container = d }} style={ this.styleContainer() }>
			<div style={ this.styleStatusTop() }><GameStatusTop player1Score={ this.state.game.player[0].score } player2Score={ this.state.game.player[1].score } /></div>

			{ !this.state.game.isGameInPlay && <InfoBoard startGame={ this.startGame } containerHeight={ this.state.containerHeight } /> }

			{ this.state.game.isGameInPlay && <div className="play-area">
				{ this.state.game.sprites?.map((sprite: ISprite) => <DrawSprite key={ sprite.key } handleClick={ this.handleClick } sprite={ sprite } height={ this.state.spriteHeight } width={ this.state.spriteWidth } containerWidth={ this.state.containerWidth } />) }
			</div> }
		</div>
	}

	private styleContainer = () => ({
		maxWidth: `${ this.state.containerHeight }px`,
	})

	private styleStatusTop = () => ({
		position: 'absolute' as 'absolute',
		width: `100%`,
		zIndex: 9000,
		maxWidth: `${ this.state.containerHeight }px`,
	})

	private startGame = async (): Promise<void> => {
		const game = new Game(this.props);
		game.isGameInPlay = true;

		const boardWidth = this.state.game.boardWidth;
		const boardHeight = this.state.game.boardHeight;
		
		await this.setState(() => ({ game, boardWidth, boardHeight }));
		this.updatePlayerArea();
	}

	private updatePlayerArea = (): void => {
		const containerHeight = this.container && this.container.getBoundingClientRect().height;
		let containerWidth = this.container && this.container.getBoundingClientRect().width;
		if (containerWidth > containerHeight) containerWidth = containerHeight;
		const spriteWidth = containerWidth / this.state.game.boardWidth;
		const spriteHeight = ((containerWidth / 100) * 85 ) / this.state.game.boardHeight;
		this.setState(() => ({ spriteWidth, spriteHeight, containerWidth, containerHeight }))
	}

	private handleClick = async (x: number) => {
		const game = this.state.game;
		game.handleInput(x);

		await this.setState(() => ({ game }));
	}
}
