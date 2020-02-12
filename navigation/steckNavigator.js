import {createStackNavigator} from 'react-navigation';
import ScreenNames from './screenNames';
import GeneralScreen from '../components/generalScreen/index';
import EditorScreen from '../components/EditorScreen/index';

export default createStackNavigator ({
        [ScreenNames.general]: {
                screen: GeneralScreen,
                navigationOptions: {
                        header: null
                }
        },
        [ScreenNames.editor]: {
                screen: EditorScreen,
                navigationOptions: {
                        header: null
                }
        }
}, {
        // initialRouteName: ScreenNames.editor //объявляем этот экран дефолтным
})