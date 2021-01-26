import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';

import {
  withThemes,
} from '@southem/theme';
import { Overwrite, StyledComponentProps } from '../../devsupport';

type LayoutStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

// @ts-ignore
export interface LayoutProps extends ViewProps, LayoutStyledProps {
  children?: React.ReactNode;
  level?: '1' | '2' | '3' | '4' | string;
}

export type LayoutElement = React.ReactElement<LayoutProps>;

/**
 * Overall page container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the layout.
 *
 * @property {string} level - Background color level of component.
 * Can be `1`, `2`, `3` or `4`.
 * Defaults to *1*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example LayoutLevel
 * Layout should be used as a root component of the screen.
 * Comparative to `View` element, it uses a background color with respect to current theme.
 * Using Layout is redundant, when background color is configured with `style` property.
 *
 * Layouts can be used in different levels.
 * It is useful, when needed to highlight the container relative to another.
 */
class LayoutComponent extends React.Component<LayoutProps> {

  public render(): React.ReactElement<ViewProps> {
    const { style, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        style={style}
      />
    );
  }
}

export const Layout = withThemes('Layout')(LayoutComponent);
