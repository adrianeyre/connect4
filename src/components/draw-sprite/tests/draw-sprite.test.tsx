import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import DrawSprite from '../draw-sprite';
import IDrawSpriteProps from '../interfaces/draw-sprite-props';
import Sprite from '../../../classes/sprite';
import SpriteTypeEnum from '../../../classes/enums/sprite-type-enum';
import ImageEnum from '../../../classes/enums/image-enum';

describe('Draw Sprite', () => {
  const buildProps = (
    overrides: Partial<IDrawSpriteProps> = {},
    visable = true,
  ): IDrawSpriteProps => ({
    sprite: new Sprite({
      key: 'sprite',
      visable,
      x: 1,
      y: 1,
      image: ImageEnum.Empty,
      type: SpriteTypeEnum.Empty,
    }),
    height: 10,
    width: 10,
    containerWidth: 100,
    handleClick: vi.fn(),
    ...overrides,
  });

  it('Should render the sprite image at the given size', () => {
    render(<DrawSprite {...buildProps()} />);

    const image = screen.getByAltText('sprite');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('height', '10');
    expect(image).toHaveAttribute('width', '10');
  });

  it('Should translate the sprite by its board position', () => {
    const props = buildProps();
    props.sprite.x = 3;
    props.sprite.y = 2;

    const { container } = render(<DrawSprite {...props} />);

    expect(container.firstElementChild).toHaveStyle({ transform: 'translate3d(20px, 10px, 0)' });
  });

  it('Should render nothing visible when the sprite is not visable', () => {
    render(<DrawSprite {...buildProps({}, false)} />);

    expect(screen.queryByAltText('sprite')).not.toBeInTheDocument();
  });

  it('Should report the column clicked', async () => {
    const handleClick = vi.fn();
    const props = buildProps({ handleClick });
    props.sprite.x = 4;

    render(<DrawSprite {...props} />);
    await userEvent.click(screen.getByAltText('sprite'));

    expect(handleClick).toHaveBeenCalledWith(4);
  });
});
