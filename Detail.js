import React, {Component} from 'react';
import styles from './style'
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
