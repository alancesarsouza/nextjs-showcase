'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ArrowLeft } from 'react-bootstrap-icons';

import { Button } from '@/components/Button';
import { css } from '@/styled/css';

export default function GoBackButton() {
  const { back } = useRouter();
  const { language } = useParams();
  const pathName = usePathname();
  const isHome = `/${language}` === pathName;

  if (isHome) {
    return null;
  }

  return (
    <div>
      <Button
        isGhost
        rightElement={<ArrowLeft className={css({ h: 'icon', w: 'icon' })} />}
        onClick={back}
      />
    </div>
  );
}
