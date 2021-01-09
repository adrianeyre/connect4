import React, { FC } from 'react';

import IInfoBoardProps from './interfaces/info-board-props';

import player1 from '../../images/player1.png';
import player2 from '../../images/player2.png';

import './styles/info-board.scss';

const InfoBoard: FC<IInfoBoardProps> = (props: IInfoBoardProps) => {
	const styleInfoBoard = () => ({
		width: `100%`,
		maxWidth: `${ props.containerHeight }px`,
	})

	return <div className="info-board" style={ styleInfoBoard() }>
		<div className="info-board-header">
			<img src={ player1 } alt="player 1" />
			<span className="header-text">Connect 4</span>
			<img src={player2 } alt="player 2" />
		</div>

		<div className="info-board-instructions">
			<p>To win Connect Four you must be the first player to get four of your colored checkers in a row either horizontally, vertically or diagonally.</p>
		</div>

		<div className="button-area">
			<button type="button" onClick={ props.startGame }>Play Game</button>
		</div>
	</div>
}

export default InfoBoard;