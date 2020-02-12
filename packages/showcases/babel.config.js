const path = require('path');
const environment = require('./env');

const evaModules = {
  '@eva-design/eva': path.resolve(environment.EVA_PATH, 'eva'),
  '@eva-design/processor': path.resolve(environment.EVA_PATH, 'processor'),
};

const frameworkModules = {
  '@ui-kitten/components': path.resolve(__dirname, '../components'),
  '@ui-kitten/date-fns': path.resolve(__dirname, '../date-fns'),
  '@ui-kitten/eva-icons': path.resolve(__dirname, '../eva-icons'),
  '@ui-kitten/moment': path.resolve(__dirname, '../moment'),
};

const uiKittenInternalAliases = {
  '@kitten/theme': path.resolve(__dirname, '../components/theme'),
  '@kitten/ui': path.resolve(__dirname, '../components/ui'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...evaModules,
    ...frameworkModules,
    ...uiKittenInternalAliases,
  },
};

const presets = [
  'babel-preset-expo',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};
