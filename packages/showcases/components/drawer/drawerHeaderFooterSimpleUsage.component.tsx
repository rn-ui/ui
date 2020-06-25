/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages
 */

import React from 'react';
import {
  DrawerHeaderFooter,
  Icon,
} from '@southem/ui';

const ProfileIcon = (style) => (
  <Icon {...style} name='person'/>
);

export const DrawerHeaderFooterSimpleUsageShowcase = () => (
  <DrawerHeaderFooter
    title='John Doe'
    description='React Native Developer'
    icon={ProfileIcon}
  />
);
