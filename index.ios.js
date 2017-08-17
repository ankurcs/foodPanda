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
import Main from './src/components/Main';

export default class foodPanda extends Component {
  render() {
    return (
      <Main/>
    )
  }
}

AppRegistry.registerComponent('foodPanda', () => foodPanda);
