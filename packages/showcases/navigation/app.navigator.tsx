import React from 'react';
import {
  ImageProps,
  StyleSheet,
} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Icon,
} from '@southem/ui';

const HeartIcon = (style: ImageProps): React.ReactElement<ImageProps> => (
  <Icon {...style} name='favorite'/>
);

/*
 * Placeholder element. Replaced during the build process
 */
export const AppNavigator = (): React.ReactElement => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h1'>
      Welcome to UI SouTheme
    </Text>
    <Text style={styles.text} category='s1'>
      Start with editing App.js to configure your App
    </Text>
    <Text style={styles.text} appearance='hint'>
      For example, try changing theme to Dark by simply changing an import
    </Text>
    <Button style={styles.likeButton} icon={HeartIcon}>
      LIKE
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});
