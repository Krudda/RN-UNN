import React , {useState} from 'react';
import {ScrollView, ImageBackground,  StyleSheet, TouchableOpacity} from 'react-native';
import NoteBox from '../noteBox/index';
import THEME from '../../values/theme';
import RoundButton from '../roundButton';
import screenNames from '../../navigation/screenNames';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
 
const GeneralScreen =  (props) => {
        // hooks

        const [editIndex, setEditIndex] = useState(false);
        const setEdit = (index) => {setEditIndex(index)};
        const unsetEdit = () => {setEditIndex(false)};

        //methods

        const goToEditor = ()=> {props.navigation.push(screenNames.editor)}

        const renderNotes = () => {
                return props.data.notes.map( (elem, index) => {
                        return (
                                <TouchableOpacity 
                                        key = {index} 
                                        onLongPress = {()=> {setEdit(index)}} 
                                        onPress = {unsetEdit}
                                        activeOpacity = {1}
                                >
                                        <NoteBox 
                                                header = {elem.header} 
                                                content = {elem.content}
                                                editMode = {index === editIndex}
                                        />
                                </TouchableOpacity>
                                );
                });
        }

        // render
        return (
                <ImageBackground 
                        style = {styles.wrapper}
                        source={THEME.generalScreen.background}
                        resizeMode={'contain'}
                        // blurRadius={15}
                        >
                        <ScrollView>
                                {renderNotes()}
                        </ScrollView>
                <TouchableOpacity 
                        activeOpacity={0.5}
                        style = {styles.activeButton}
                        onPress={goToEditor}>
                        
                        <RoundButton img={THEME.actionButton.img}/>
                        {
                                editIndex !== false && (
                                        <RoundButton img={THEME.actionButton.img} />
                                )
                        }
                </TouchableOpacity>
                </ImageBackground>)
}

const styles = StyleSheet.create ({
        wrapper: {
                flex: 1,
                paddingTop: THEME.generalScreen.paddingTop,
        },
        activeButton: {
                position: 'absolute',
                bottom: 30,
                right: 30
        }
})

export default connect( (store) => {
        return {
                data: store.data
        }
}, actions)(GeneralScreen);