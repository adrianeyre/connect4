import React from 'react';

import IInfoBoardProps from './interfaces/info-board-props';

import player1 from '../../images/player1.png';
import player2 from '../../images/player2.png';

import './styles/info-board.scss';

export default class InfoBoard extends React.Component<IInfoBoardProps, {}> {
	public render() {
		return <div className="info-board" style={ this.styleInfoBoard() }>
			<div className="info-board-header">
				<img src={ player1 } alt="player 1" />
				<span className="header-text">Connect 4</span>
				<img src={player2 } alt="player 2" />
			</div>

			<div className="info-board-instructions">
				<p></p>
			</div>

			<div className="button-area">
				<button type="button" onClick={ this.props.startGame }>Play Game</button>
			</div>
		</div>
	}

	private styleInfoBoard = () => ({
		width: `100%`,
		maxWidth: `${ this.props.containerHeight }px`,
	})
}
