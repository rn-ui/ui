import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { withThemes } from '@southem/theme';
import {
  ChildrenWithProps,
  IndexPath,
  Overwrite,
  StyledComponentProps,
} from '../../devsupport';
import {
  Divider,
  List,
  ListElement,
  ListProps,
} from '../../common';

import {
  MenuItemElement,
  MenuItemProps,
} from './menu-item';
import {
  MenuItemDescriptor,
  MenuService,
} from './menu.service';

type MenuStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | 'noDivider' | string;
}>;

type MenuListProps = Omit<ListProps, 'data' | 'renderItem'>;

// @ts-ignore
export interface MenuProps extends MenuListProps, MenuStyledProps {
  children?: ChildrenWithProps<MenuItemProps>;
  selectedIndex?: IndexPath;
  onSelect?: (index: IndexPath) => void;
}

export type MenuElement = React.ReactElement<MenuProps>;

/**
 * A versatile menu for navigation.
 * Menu should contain MenuItem or MenuGroup components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default` or `noDivider`.
 *
 * @property {ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[]} children -
 * Items to be rendered within menu.
 *
 * @property {IndexPath} selectedIndex - Index of selected item.
 * IndexPath `row: number, section?: number` - position of element in sectioned list.
 * Menu becomes sectioned when MenuGroup is rendered within children.
 * Updating this property is not required if marking items selected is not needed.
 *
 * @property {(IndexPath) => void} onSelect - Called when item is pressed.
 * Called with `row: number` for non-grouped items.
 * Called with `row: number, section: number` for items rendered within group,
 * where row - index of item in group, section - index of group in list.
 *
 * @property {ListProps} ...ListProps - Any props applied to List component,
 * excluding `renderItem` and `data`.
 *
 * @overview-example MenuSimpleUsage
 *
 * @overview-example MenuIndexType
 * Menu works with special index object - IndexPath.
 * For non-grouped items in menu, there is only a `row` property.
 * Otherwise, `row` is an index of option within the group, section - index of group in menu.
 * ```
 * interface IndexPath {
 *   row: number;
 *   section?: number;
 * }
 * ```
 *
 * @overview-example MenuNoMarkers
 * Pressing of menu items can be handled without marking items.
 *
 * @overview-example MenuAccessories
 * Items may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Southem, item accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example MenuGroups
 * And be grouped within `MenuGroup` component.
 *
 * @overview-example MenuDisabledOptions
 * Also, it may be disabled with `disabled` property.
 *
 * @overview-example MenuStyling
 * Menu and it's inner views can be styled by passing them as function components.
 * ```
 * import { MenuItem, Text } from '@southem/ui';
 *
 * <MenuItem
 *   title={props => <Text {...evaProps}>USERS</Text>}>
 * </MenuItem>
 * ```
 *
 * @overview-example MenuTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 *
 */
// @ts-ignore
@withThemes('Menu')
export class Menu extends React.Component<MenuProps> {

  private service: MenuService = new MenuService();

  private get data(): any[] {
    // @ts-ignore
    return React.Children.toArray(this.props.data || this.props.children);
  }

  private get shouldRenderDividers(): boolean {
    return this.props.appearance !== 'noDivider';
  }

  public clear = (): void => {
    this.props.onSelect && this.props.onSelect(null);
  };

  private onItemPress = (descriptor: MenuItemDescriptor): void => {
    this.props.onSelect && this.props.onSelect(descriptor.index);
  };

  private isItemSelected = (descriptor: MenuItemDescriptor): boolean => {
    return descriptor.index.equals(this.props.selectedIndex);
  };

  private cloneItemWithProps = (element: React.ReactElement, props: MenuItemProps): React.ReactElement => {
    const nestedElements = React.Children.map(element.props.children, (el: MenuItemElement, index: number) => {
      const descriptor = this.service.createDescriptorForNestedElement(el, props.descriptor, index);
      const selected: boolean = this.isItemSelected(descriptor);

      return this.cloneItemWithProps(el, { ...props, selected, descriptor });
    });

    return React.cloneElement(element, { ...props, ...element.props }, nestedElements);
  };

  private renderItem = (info: ListRenderItemInfo<MenuItemElement>): React.ReactElement => {
    const descriptor = this.service.createDescriptorForElement(info.item, info.index);
    const selected: boolean = this.isItemSelected(descriptor);

    return this.cloneItemWithProps(info.item, { descriptor, selected, onPress: this.onItemPress });
  };

  public render(): ListElement {
    const {
      // @ts-ignore
      data,
      ...listProps
    } = this.props;
    return (
      <List
        ItemSeparatorComponent={this.shouldRenderDividers && Divider}
        {...listProps}
        data={this.data}
        renderItem={this.renderItem}
      />
    );
  }
}
