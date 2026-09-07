import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Connect4 from '../connect4';
import IConnect4Props from '../interfaces/connect4-props';

describe('Connect 4', () => {
  const defaultProps: IConnect4Props = {};

  it('Should open on the info board rather than a board in play', () => {
    const { container } = render(<Connect4 {...defaultProps} />);

    expect(container.querySelector('.info-board')).toBeInTheDocument();
    expect(container.querySelector('.play-area')).not.toBeInTheDocument();
  });

  it('Should show both scores at zero', () => {
    render(<Connect4 {...defaultProps} />);

    expect(screen.getAllByText('0')).toHaveLength(2);
  });

  it('Should swap the info board for a full 7x6 board once the game starts', async () => {
    const { container } = render(<Connect4 {...defaultProps} />);

    await userEvent.click(screen.getByRole('button', { name: 'Play Game' }));

    expect(container.querySelector('.info-board')).not.toBeInTheDocument();
    expect(container.querySelector('.play-area')).toBeInTheDocument();
    expect(screen.getAllByAltText('sprite')).toHaveLength(42);
  });

  it('Should hand the turn to player 2 after player 1 drops a counter', async () => {
    render(<Connect4 {...defaultProps} />);

    await userEvent.click(screen.getByRole('button', { name: 'Play Game' }));
    expect(screen.getByAltText('player 1 turn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByAltText('sprite')[0]);

    expect(screen.getByAltText('player 2 turn')).toBeInTheDocument();
  });
});
