import React from 'react';

import IDrawSpriteProps from './interfaces/draw-sprite-props';

export default class DrawSprite extends React.Component<IDrawSpriteProps, {}> {
	private offsetHeight: number = 0;
	private offsetWidth: number = 0;

	public render() {
		if (!this.props.sprite.visable) return <div></div>

		return <div key={ this.props.sprite.key } onClick={ this.props.handleClick.bind(this, this.props.sprite.x) } style={ this.styleSprite(this.props.sprite.x, this.props.sprite.y) }>
			<img
				src={ this.props.sprite.image }
				height={ this.props.height }
				width={ this.props.width }
				alt="sprite"
			/>
		</div>
	}

	private styleSprite = (x: number, y: number) => ({
		width: 0,
		height: 0,
		opacity: 1,
		WebkitTransform: `translate3d(${ (x - 1) * this.props.width + this.offsetWidth }px, ${ this.offsetHeight + (y - 1) * this.props.height }px, 0)`,
		transform: `translate3d(${ (x - 1) * this.props.width + this.offsetWidth }px, ${ this.offsetHeight + (y - 1) * this.props.height }px, 0)`,
		zIndex: this.props.sprite.zIndex,
	})
}
