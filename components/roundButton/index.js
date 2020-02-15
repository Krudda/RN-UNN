import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { parentSize } from '../../values/dimn';
import theme from '../../values/theme';
import THEME from '../../values/theme';



export default (props) => {
        return (
                <View style = {styles.wrapper}>
                        <Image 
                        source = {props.img}
                        style = {styles.img}
                        />
                </View>
                
        )
};

const styles = StyleSheet.create({
        wrapper: {
                height: THEME.roundButton.buttonSize,
                width: THEME.roundButton.buttonSize,
                borderRadius: THEME.roundButton.buttonSize/2,
        },
        img: {
                height: parentSize,
                width: parentSize,
        }
})