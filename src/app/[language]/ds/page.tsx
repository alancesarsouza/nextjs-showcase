import { EmojiAngry } from 'react-bootstrap-icons';

import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { css } from '@/styled/css';

export const metadata = {
  title: 'Design System',
};

export default function AppDs() {
  return (
    <main>
      <div
        className={css({
          bg: 'baseBg',
          display: 'flex',
          flexDir: { base: 'column', xl: 'row' },
          h: 'full',
          w: 'full',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', gap: 'sm', p: 'lg' })}>
          <Button disabled>Button disabled</Button>
          <Button>Button</Button>
          <Button disabled isOutLine>
            Button disabled outline
          </Button>
          <Button isOutLine>Button outline</Button>
          <IconButton label="i">
            <EmojiAngry className={css({ h: 'icon', w: 'icon' })} />
          </IconButton>
        </div>
      </div>
    </main>
  );
}
