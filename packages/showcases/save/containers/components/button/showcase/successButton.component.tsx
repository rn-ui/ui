import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const SuccessButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='success'
      {...props}>
      BUTTON
    </Button>
  );
};