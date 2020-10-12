/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

console.log(path.resolve(__dirname, '../../'));
console.log(path.resolve(__dirname, 'node_modules'));

const watchFolders = [
  path.resolve(__dirname, '..', 'js'),
  path.resolve(__dirname, '..', 'ts'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders,
};
