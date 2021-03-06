/* eslint-disable */
import React, { Component } from 'react';
import {
    GestureResponderEvent,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import { Icon, IconProps } from '@southem/icons';
import {
  renderNode,
  RenderProp,
  Overwrite,
  StyledComponentProps,
} from '../../devsupport';

type TopNavigationActionStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | 'control' | string;
}>;

// @ts-ignore
export interface TopNavigationActionProps extends TouchableOpacityProps, TopNavigationActionStyledProps {
  icon?: RenderProp<Partial<IconProps>>;
  tintColor?: string;
  iconHeight?: number;
  iconWidth?: number;
}

export type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

/**
 * The `TopNavigationAction` component is a part of the TopNavigation component.
 * Top Navigation Actions should be used in TopNavigation to provide usable component.
 * See usage examples at TopNavigation component documentation.
 *
 * @extends React.Component
 *
 * @property {() => React.ReactElement<ImageProps>} icon - Determines the icon of the tab.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 */
// @ts-ignore
@withThemes('TopNavigationAction', ['tintColor'])
// @ts-ignore
export class TopNavigationAction extends Component<TopNavigationActionProps> {

    public static displayName: string = 'TopNavigationAction';

    private onPress = (event: GestureResponderEvent) => {
        if (this.props.onPress) {
            this.props.onPress(event);
        }
    };

    private onPressIn = (event: GestureResponderEvent) => {
        if (this.props.onPressIn) {
            this.props.onPressIn(event);
        }
    };

    private onPressOut = (event: GestureResponderEvent) => {
        if (this.props.onPressOut) {
            this.props.onPressOut(event);
        }
    };

    public render(): React.ReactNode {
        const {
            style,
            icon,
            iconHeight,
            iconWidth,
            tintColor,
            ...touchableProps
        } = this.props;

        // const hitSlop: number = 40 - iconWidth;

        return (
            <TouchableOpacity
                activeOpacity={1.0}
                // hitSlop={hitSlop}
                {...touchableProps}
                style={style}
                onPress={this.onPress}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}>
                {renderNode(Icon, icon, {
                    color: tintColor,
                    style: { height: iconHeight, width: iconWidth },
                })}
            </TouchableOpacity>
        );
    }
}
