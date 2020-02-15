        import React , {useState, useRef} from 'react';
        import {ScrollView, 
                ImageBackground,  
                StyleSheet, 
                TouchableOpacity, 
                Animated,
                LayoutAnimation} from 'react-native';
        import NoteBox from '../noteBox/index';
        import THEME from '../../values/theme';
        import RoundButton from '../roundButton';
        import screenNames from '../../navigation/screenNames';
        import { connect } from 'react-redux';
        import actions from '../../actions/actions';
        import {translate} from './anim';
        
        const GeneralScreen =  (props) => {
                //animation
                const topEditButton = useRef(new Animated.Value(- THEME.roundButton.buttonSize)).current;
                const topDeleteButton = useRef(new Animated.Value(- THEME.roundButton.buttonSize)).current;
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                // hooks
                const [editIndex, setEditIndex] = useState(false);
                const setEdit = (index) => {
                        setEditIndex(index); 
                        translate(topEditButton, 30 + THEME.roundButton.buttonSize, THEME.roundButton.anim);
                        translate(topDeleteButton, 45 + THEME.roundButton.buttonSize *2, THEME.roundButton.anim)
                };
                const unsetEdit = () => {
                        setEditIndex(false);
                        translate(topEditButton, 
                                - THEME.roundButton.buttonSize, 
                                THEME.roundButton.anim);
                        translate(topDeleteButton, 
                                - THEME.roundButton.buttonSize, 
                                THEME.roundButton.anim);
                };

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
                const sentNoteToEditor = () => {
                        props.navigation.push(screenNames.editor, {
                                index: editIndex,
                                ...props.data.notes[editIndex]
                        });
                        unsetEdit();
                };
                const deleteNote = () => {
                        props.deleteNoteAction(editIndex);
                        unsetEdit();
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
                                onPress={goToEditor}
                                >
                                <RoundButton img={THEME.actionButton.img}/>
                        </TouchableOpacity>

                        <Animated.View style = {[styles.editButton, {bottom: topEditButton}]}>
                                <TouchableOpacity 
                                activeOpacity={0.5}
                                onPress={sentNoteToEditor}
                                >
                                <RoundButton img={THEME.editButton.img} />
                                </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style = {[styles.deleteButton, {bottom: topDeleteButton}]}>
                                <TouchableOpacity 
                                        activeOpacity={0.5}
                                        onPress={deleteNote}
                                        >
                                        <RoundButton img={THEME.deleteButton.img} />
                                </TouchableOpacity>
                        </Animated.View>

                </ImageBackground>)
}

const styles = StyleSheet.create ({
        wrapper: {
                flex: 1,
                paddingTop: THEME.generalScreen.paddingTop,
        },
        activeButton: {
                position: 'absolute',
                bottom: 15,
                right: 30,
                elevation: 3,
        },
        editButton: {
                position: 'absolute',
                right: 30,
                elevation: 2
        },
        deleteButton: {
                position: 'absolute',
                right: 30,
                elevation: 2
        }
})

export default connect( (store) => {
        return {
                data: store.data
        }
}, actions)(GeneralScreen);