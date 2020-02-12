import React from 'react';
import { StyleSheet, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';
import THEME from '../../values/theme';
import { WIDTH, HEIGHT, parentSize } from '../../values/dimn';
import RoundButton from '../roundButton';
import Note from '../../entities/note.js';
import { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/actions';

const EditorScreen = (props)=> {
const [header, setHeader] = useState(false);
const [content, setContent] = useState('');

        const goGeneralScreen = () => {props.navigation.pop()}

        const addNewNote = () => {
                props.addNoteAction(new Note({header, content, photo: null, date: new Date() }));
                // console.log(new Note({header, content, photo: null, date: new Date() }));
                goGeneralScreen();
        }

        return (
                <ImageBackground
                        style = {styles.wrapper}
                        source={THEME.generalScreen.background}
                        // source = {require('../../assets/add.png')}
                        resizeMode={'contain'}>
                
                <View style = {styles.editorPanel}>
                        <TextInput
                                autoCapitalize = 'none'
                                // autoFocus
                                placeholder = {'Название заметки'}
                                placeholderTextColor = {'dimgray'}
                                style = {[styles.input, {fontSize: 24}]}
                                onChangeText={(e) => {setHeader(e)}}
                        />
                        <TextInput
                                autoCapitalize = 'none'
                                placeholder = {'Введите текст'}
                                placeholderTextColor = {'dimgray'}
                                style = {[styles.input, {fontSize: 20}]}
                                multiline
                                onChangeText={(e) => {setContent(e)}}
                        />
                </View>
                <View style = {styles.buttonPannel}>
                        <TouchableOpacity  
                                activeOpacity={0.5}
                                onPress = {goGeneralScreen}>
                                <RoundButton  img = {require('../../assets/back.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity  activeOpacity={0.5}>
                                <RoundButton img = {require('../../assets/camera.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity  activeOpacity={0.5}
                        onPress = {addNewNote}>
                                <RoundButton img = {require('../../assets/yes.png')}/>
                        </TouchableOpacity>
                </View>

                </ImageBackground>
        )
}


const styles = StyleSheet.create({
        wrapper: {
                flex: 1,
                paddingTop: THEME.generalScreen.paddingTop,
        },
        editorPanel: {
                flex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                marginHorizontal: WIDTH/10,
                marginVertical: HEIGHT/20,
                shadowColor: '#2f3640',
                shadowOffset: {
                  width: 10,
                  height: 3,
                },
                shadowRadius: 15,
                shadowOpacity: 0.5,
                elevation: 10
        },
        input: {
                marginHorizontal: 20,
                marginVertical: 20,
        },
        buttonPannel: {
                width: parentSize,
                position: 'absolute',
                bottom: 10,
                flexDirection: 'row',
                elevation: 11,
                justifyContent: 'space-around'
        }
});

export default connect(
        (store) => ({data: store.data}), actions
)(EditorScreen)