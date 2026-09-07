import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import InfoBoard from '../info-board';
import IInfoBoardProps from '../interfaces/info-board-props';

describe('Info Board', () => {
  const buildProps = (overrides: Partial<IInfoBoardProps> = {}): IInfoBoardProps => ({
    containerHeight: 100,
    startGame: vi.fn(),
    ...overrides,
  });

  it('Should render the title and instructions', () => {
    render(<InfoBoard {...buildProps()} />);

    expect(screen.getByText('Connect 4')).toBeInTheDocument();
    expect(screen.getByText(/four of your colored checkers in a row/i)).toBeInTheDocument();
  });

  it('Should size itself to the container height', () => {
    const { container } = render(<InfoBoard {...buildProps({ containerHeight: 640 })} />);

    expect(container.querySelector('.info-board')).toHaveStyle({ maxWidth: '640px' });
  });

  it('Should call startGame when the button is clicked', async () => {
    const startGame = vi.fn();
    render(<InfoBoard {...buildProps({ startGame })} />);

    await userEvent.click(screen.getByRole('button', { name: 'Play Game' }));

    expect(startGame).toHaveBeenCalledTimes(1);
  });
});
