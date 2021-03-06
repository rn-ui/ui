const path = require('path');

const frameworkModules = [
  path.resolve(__dirname, '../animation'),
  path.resolve(__dirname, '../fonts'),
  path.resolve(__dirname, '../html'),
  path.resolve(__dirname, '../icons'),
  path.resolve(__dirname, '../styles'),
  path.resolve(__dirname, '../theme'),
  path.resolve(__dirname, '../tools'),
  path.resolve(__dirname, '../ui'),
];

const moduleDependencies = [
  // @southem/ui
  path.resolve(__dirname, '../../node_modules/hoist-non-react-statics'),
  path.resolve(__dirname, '../../node_modules/lodash'),
  path.resolve(__dirname, '../../node_modules/fecha'),

  // external
  path.resolve(__dirname, '../../node_modules/moment'),
  path.resolve(__dirname, '../../node_modules/react-native-background-timer'),
  path.resolve(__dirname, '../../node_modules/react-native-svg'),
  path.resolve(__dirname, '../../node_modules/react-is'),
  path.resolve(__dirname, '../../node_modules/source-map'),
];

const playgroundExtraModules = {
  '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
  '@expo/vector-icons': path.resolve(__dirname, './node_modules/@expo/vector-icons'),
  'expo-font': path.resolve(__dirname, './node_modules/expo-font'),
  'color': path.resolve(__dirname, './node_modules/color'),
  'css-tree': path.resolve(__dirname, './node_modules/css-tree'),
  'css-select': path.resolve(__dirname, './node_modules/css-select'),
  'react': path.resolve(__dirname, './node_modules/react'),
  'react-native': path.resolve(__dirname, './node_modules/react-native'),
  'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
};

module.exports = {
  projectRoot: path.resolve(__dirname),
  transformer: {
    getTransformOptions: async() => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx'],
    extraNodeModules: playgroundExtraModules,
    /**
    extraNodeModules: new Proxy(playgroundExtraModules, {
      get: (target, name) => path.join(__dirname, `node_modules/${name}`),
    }),
    **/
  },
  watchFolders: [
    ...frameworkModules,
    ...moduleDependencies,
  ],
};
