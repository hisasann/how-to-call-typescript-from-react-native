/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { ts } from 'ts';
import App from './App';
import {name as appName} from './app.json';

ts();

AppRegistry.registerComponent(appName, () => App);
