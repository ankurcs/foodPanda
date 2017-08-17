/*
FileName : Menu.js
Author   : Ankur Gupta
Last Updated : 17 Aug 2017
*/
import React, {Component} from 'react';
import {
	View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from '../css/style'
import {
    Actions 
} from 'react-native-router-flux';
export default class Menu extends Component {
	constructor () {
		super();
    }
    onClickimage (a) {
        Actions.detail({ data : a });
    }
    renderMenu() {
        let s = [];
        let imgArr = [
            { src:require('../assets/Images/imgmenu1.png'), name: '1st item name'},
            { src:require('../assets/Images/imgmenu2.png'), name: '2nd item name'},
            { src:require('../assets/Images/imgmenu3.png'), name: '3rd item name'}
        ];
        s.push(<TouchableOpacity 
                    style = {[styles.cardShadow, styles.pbSm]}
                    onPress = { () => this.onClickimage(imgArr[0])}
                    key = { 1 }
                >
                    <Image 
                        source = { require('../assets/Images/imgmenu1.png') } 
                        style = {[styles.imgItem]}
                    />
                    <Text 
                        numberOfLines = { 1 } 
                        style = {[styles.itemWidth, styles.plSm]}
                    >
                        {'1st Menu'}
                    </Text>
                </TouchableOpacity>);
        s.push(<TouchableOpacity 
                    style = {[styles.cardShadow, styles.pbSm]}
                    onPress = { () => this.onClickimage(imgArr[1])}
                    key = { 2 }
                >
                    <Image 
                        source = { require('../assets/Images/imgmenu2.png') } 
                        style = {[styles.imgItem]}
                    />
                    <Text 
                        numberOfLines = { 1 } 
                        style = {[styles.itemWidth, styles.plSm]}
                    >
                        {'2nd Menu'}
                    </Text>
                </TouchableOpacity>);
        s.push(<TouchableOpacity 
                    style = {[styles.cardShadow, styles.pbSm]}
                    onPress = { () => this.onClickimage(imgArr[2])}
                    key = { 3 }
                >
                    <Image 
                        source = { require('../assets/Images/imgmenu3.png') } 
                        style = {[styles.imgItem]}
                    />
                    <Text 
                        numberOfLines = { 1 } 
                        style = {[styles.itemWidth, styles.plSm]}
                    >
                        {'3rd Menu'}
                    </Text>
                </TouchableOpacity>)
        return s;
    }
	render () {
		return (
            <View>
		        <View style={[styles.center, {height: 70}]}>
		            <Text>{this.props.title}</Text>
		        </View>
                <ScrollView>
                    <View style={[styles.center]}>{this.renderMenu()}</View>
                </ScrollView>
            </View>
		);
	}
}
