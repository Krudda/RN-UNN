import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HEIGHT, parentSize, WIDTH } from '../../values/dimn';
import THEME from '../../values/theme';

export default (props) => {
        return <View style = {[
                        styles.wrapper, 
                        props.editMode && {backgroundColor: 'rgba(0, 212,187,0.9)'}
                        ]}>
                <View style = {styles.header}>
                        <Text style = {styles.textHeader}> {props.header}</Text>
                </View>
                <View style = {styles.content}>
                        <Text style = {styles.textContent}>{props.content}</Text>
                </View>
        </View>
}


const styles = StyleSheet.create({
        wrapper: {
                marginHorizontal: WIDTH/20,
                height: 'auto',
                // width: parentSize,
                backgroundColor: THEME.note.backgroundColor,
                borderRadius: 20,
                elevation: 10, //тень отлько для Android
                shadowColor: '#2f3640',
                shadowOffset: {
                  width: 10,
                  height: 3,
                },
                shadowRadius: 15,
                shadowOpacity: 0.5,
                marginVertical:10,
                paddingHorizontal: '5%',

        },
        header :{
                paddingVertical: 10,
        },
        content: {
                paddingBottom: 10
        }, 
        textHeader: {
                fontSize: 24,
        },
        textContent: {
                fontSize: 18,
        }
});
