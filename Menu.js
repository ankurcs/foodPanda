import React, {Component} from 'react';
import {
	View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from './style'
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
    renderMeu() {
        let s = [];
        let imgArr = [
            { src:require('./Images/imgmenu1.png'), name: '1st item name'},
            { src:require('./Images/imgmenu2.png'), name: '2nd item name'},
            { src:require('./Images/imgmenu3.png'), name: '3rd item name'}
        ];
        s.push(<TouchableOpacity 
                    style = {[styles.cardShadow, styles.pbSm]}
                    onPress = { () => this.onClickimage(imgArr[0])}
                    key = { 1 }
                >
                    <Image 
                        source = { require('./Images/imgmenu1.png') } 
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
                        source = { require('./Images/imgmenu2.png') } 
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
                        source = { require('./Images/imgmenu3.png') } 
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
                <ScrollView>
                    {this.renderMeu()}
                </ScrollView>
            </View>
		);
	}
}
