import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import StackNavigator from './navigation/steckNavigator';
import { createStore } from 'redux';
import { provider, Provider } from 'react-redux';
import './settings';
import { rootReducer } from './reducers/rootReducer';

const AppContainer = createAppContainer(StackNavigator);

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store = {store}>
      <AppContainer/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 34
  }
});
