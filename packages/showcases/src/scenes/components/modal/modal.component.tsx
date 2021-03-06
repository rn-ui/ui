import React from 'react';
import { ModalElement, ModalProps } from '@southem/ui';
import { ModalShowcase } from './modal-showcase.component';
import { modalShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const ModalScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: ModalProps): ModalElement => (
    <ModalShowcase {...props}/>
  );

  return (
    <ShowcaseContainer
      showcase={modalShowcase}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

