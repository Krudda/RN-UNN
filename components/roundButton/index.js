import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { parentSize } from '../../values/dimn';




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
                height: 70,
                width: 70,
                borderRadius: 35,
        },
        img: {
                height: parentSize,
                width: parentSize,
        }
})