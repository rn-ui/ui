import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconCreditCardProps = SvgProps;
export type IconCreditCardElement = React.ReactElement<IconCreditCardProps>;

export const IconCreditCard = ({
                                 color = '#000000',
                                 height = 24,
                                 width = 24,
                               }: IconCreditCardProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='credit-card'>
      <Path
        fill={color}
        d='M26 8.80921L24.1666 7H5.83333L4 8.80921V10.4737H26V8.80921ZM26 12.5H4L4 19.6644L5.80277 21.4737H24.1666L26 19.6644L26 12.5ZM8.63158 18H10.9224V16.8421H8.63158V18ZM14.4044 18H12.1136V16.8421H14.4044V18ZM15.5956 18H17.8864V16.8421H15.5956V18ZM21.3684 18H19.0776V16.8421H21.3684V18Z'
      />
    </G>
  </Svg>
);
