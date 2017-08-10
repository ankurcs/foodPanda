
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './Main';

export default class foodPanda extends Component {
  render() {
    return (
      <Main/>
    )
  }
}

AppRegistry.registerComponent('foodPanda', () => foodPanda);
