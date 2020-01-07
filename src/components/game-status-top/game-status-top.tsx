import React from 'react';
import IGameStatusTopProps from './interfaces/game-status-top-props';

import player1Turn from '../../images/player-1-turn.png';
import player2Turn from '../../images/player-2-turn.png';

import './styles/game-status-top.scss';

export default class GameStatusTop extends React.Component<IGameStatusTopProps, {}> {

	public render() {
		return <div className="game-status-top">
			<div className="game-status-left">
				1-UP <span className="variable-text">{ this.props.player1Score }</span>
				{ this.props.playerOn && <img src={ player1Turn } alt="player 1 turn" /> }
			</div>
			<div className="game-status-right">
				{ !this.props.playerOn && <img src={ player2Turn } alt="player 2 turn" /> }
				2-UP <span className="variable-text">{ this.props.player2Score }</span>
			</div>
		</div>
	}
}
