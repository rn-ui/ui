const path = require('path');

/**
 * UI Southem modules aliases (needed for Jest resolver)
 */
const ROOT_PATH = './';

const moduleInternalAliases = {
  '@southem/animation': path.resolve(ROOT_PATH, './packages/animation'),
  '@southem/fonts': path.resolve(ROOT_PATH, './packages/fonts'),
  '@southem/html': path.resolve(ROOT_PATH, './packages/html'),
  '@southem/icons': path.resolve(__dirname, './packages/icons'),
  '@southem/styles': path.resolve(__dirname, './packages/styles'),
  '@southem/theme': path.resolve(ROOT_PATH, './packages/theme'),
  '@southem/tools': path.resolve(ROOT_PATH, './packages/tools'),
  '@southem/ui': path.resolve(ROOT_PATH, './packages/ui'),
};

const moduleResolverConfig = {
  root: path.resolve(ROOT_PATH),
  alias: {
    ...moduleInternalAliases,
  },
};

const presets = [
  'module:metro-react-native-babel-preset',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
  ['@babel/plugin-proposal-decorators', {'legacy': true}]
];

module.exports = function (api) {
  api.cache(true);
  return {presets, plugins};
};
