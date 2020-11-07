/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './App';
// import Makeup from './src(Makeup)/Makeup';
// import Router from './src(famuosOnes)/Router'
import Router from './src(myJopApi)/Router';
// import Router from './src(cityYelp)/Router'
// import Makeup from './src(Makeup)/Makeup';
// import Router from './src(JobApi)/Router';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
