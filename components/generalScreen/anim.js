import { Animated } from 'react-native';

export const translate = (prop, toValue, duration) =>{
        Animated.timing(prop, {
                toValue,
                duration
        }).start();
};