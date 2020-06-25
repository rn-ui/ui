import React from 'react';
import { PopoverProps } from '@southem/ui';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const BottomEndPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='bottom end'/>
  );
};
