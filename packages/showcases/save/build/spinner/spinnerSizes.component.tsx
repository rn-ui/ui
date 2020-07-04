import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Spinner,
} from '@southem/ui';

export const SpinnerSizesShowcase = () => (
  <Layout style={styles.container}>

    <Spinner size='tiny'/>

    <Spinner size='small'/>

    <Spinner size='medium'/>

    <Spinner size='large'/>

    <Spinner size='giant'/>

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});