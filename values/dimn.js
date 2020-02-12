import {Dimensions, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const {width, height} = Dimensions.get('window');

export const WIDTH = width;
export const HEIGHT = height;
export const parentSize = '100%';
// export const heightStatusBar = StatusBar.currentHeight;
export const heightStatusBar = getStatusBarHeight(true);