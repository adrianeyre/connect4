import { render, screen } from '@testing-library/react';

import GameStatusTop from '../game-status-top';
import IGameStatusTopProps from '../interfaces/game-status-top-props';

describe('Game Status Top', () => {
  const defaultProps: IGameStatusTopProps = {
    player1Score: 100,
    player2Score: 200,
    playerOn: true,
  };

  it('Should render both scores', () => {
    const { container } = render(<GameStatusTop {...defaultProps} />);

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(container.querySelector('.game-status-top')).toBeInTheDocument();
  });

  it("Should show player 1's turn marker when playerOn is true", () => {
    render(<GameStatusTop {...defaultProps} playerOn={true} />);

    expect(screen.getByAltText('player 1 turn')).toBeInTheDocument();
    expect(screen.queryByAltText('player 2 turn')).not.toBeInTheDocument();
  });

  it("Should show player 2's turn marker when playerOn is false", () => {
    render(<GameStatusTop {...defaultProps} playerOn={false} />);

    expect(screen.getByAltText('player 2 turn')).toBeInTheDocument();
    expect(screen.queryByAltText('player 1 turn')).not.toBeInTheDocument();
  });
});
