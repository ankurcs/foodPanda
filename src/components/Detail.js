/*
FileName : Detail.js
Author   : Ankur Gupta
Last Updated : 17 Aug 2017
*/
import React, {Component} from 'react';
import styles from '../css/style'
import {
	View,
    Text,
    Image,
} from 'react-native';
export default class Detail extends Component {
	constructor () {
		super();
    }
	render () {
		return (
            <View 
                style = {[styles.center]}
            >
                <Image 
                    source = { this.props.data.src } 
                    style = {[styles.fullImage]}
                />
            </View>
		);
	}
}
