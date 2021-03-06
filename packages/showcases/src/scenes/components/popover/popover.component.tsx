import React from 'react';
import { PopoverElement, PopoverProps } from '@southem/ui';
import { PopoverShowcase } from './popover-showcase.component';
import { popoverSettings, popoverShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const PopoverScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: PopoverProps): PopoverElement => (
    <PopoverShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={popoverShowcase}
      settings={popoverSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

