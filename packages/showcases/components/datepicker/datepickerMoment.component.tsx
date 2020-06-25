/**
 * IMPORTANT: To use Moment make sure to install Moment Date Service
 * npm i @ui-kitten/moment
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Datepicker,
  Layout,
} from '@southem/ui';
import { MomentDateService } from '@southem/moment';

const dateService = new MomentDateService();

export const DatepickerMomentShowcase = () => {

  const [date, setDate] = React.useState(null);

  return (
    <Layout style={styles.container}>
      <Datepicker
        placeholder='Pick Date'
        date={date}
        dateService={dateService}
        onSelect={setDate}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 376,
  },
});
