import React from 'react';
import { TooltipProps } from '@southem/ui';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

export const BottomStartTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase placement='bottom start'/>
  );
};