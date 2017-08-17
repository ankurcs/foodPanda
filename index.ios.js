/*
 * FileName : index.ios.js
 * Author	: Ankur Gupta
 * Last Updated: 17 Aug 2017
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/components/Main';
import configStore from './src/store/configureStore';
const store = configStore();
var RCTLog = require('RCTLog'); 

export default class foodPanda extends Component {
	render(){
		return (
			<Provider store={store}>
		        {<Main />}
		    </Provider>
		)
	}
}

AppRegistry.registerComponent('foodPanda', () => foodPanda);
