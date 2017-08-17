/*
 * FileName : Login.js
 * Author	: Ankur Gupta
 * Last Updated: 17 Aug 2017
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	Dimensions,
	TextInput,
	Image,
	TouchableOpacity,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import {
    Actions 
} from 'react-native-router-flux';
import styles from '../css/style';
import firebase from 'firebase';
import {connectFirebase, validateMail} from '../reducers/Action';

export default class Login extends Component {
	constructor (props) {
	    super(props);
	    this.state = {
	    	loader			: false,
	    };
	    this.email = '';
	    this.password = '';
	}
	
	signIn() {
		let email = this.email;
	    let password = this.password;
	    let emailPass = {
	        email: email,
	        password: password
	    };
	    let count = 0;
	    if (typeof email == 'undefined' || email == '') {
	    	count++;
	        alert('Email and Password are required');
	        
	    } else if (typeof password == 'undefined' || password == '') {
	    	count++;
	        alert('Email and Password are required');
	        
	    } else if (!validateMail(email)) {
	        count++;
	        alert('Invalid Email!');
	    }
	    if (count > 0) {
	       // alert('User Authentication Failed!');
	    } else {
	        this.setState({loader: true});
	        connectFirebase(emailPass, function(res) {
	            if (res == 1) {
	               	Actions.menu();
	            } else {
	                alert("User Not Registered!");
	            }
	            this.setState({loader: false});
	        }.bind(this));
	    }
	}
   
	render () {
		let color= "#fff";
	    return (
    		<View style={[styles.loginTab,{backgroundColor:'#fefefe'}]}>
		    	<ScrollView pointerEvents={this.state.loader ? 'none' : 'auto'} ref="scrollView">
			    	<View style={[styles.center, styles.loginCenter]}>
						<Text style={[styles.heading2,styles.textBlack]}>Food Panda</Text>
						<View style={[styles.mtLg, styles.mbMd,]}>
							<TextInput 
								style={[styles.width60, 
										styles.textLeft, 
										styles.textInput, 
										styles.pl, 
										styles.headingFont
									]}
								placeholder="Username or Email" 
								autoCapitalize="none" 
								autoCorrect={false} 
								keyboardType={'email-address'}
								onChangeText={email => this.email = email }
							/>
						</View>
						<View>
							<TextInput 
								style={[styles.width60,
										styles.textLeft, 
										styles.pl, 
										styles.textInput, 
										styles.headingFont
									  ]} 
								placeholder="Password"
								onChangeText={password => this.password= password}
								secureTextEntry={true}
								onSubmitEditing={()=>this.signIn()}
							/>
						</View>
						<TouchableOpacity 
								style={[styles.btnFullScreen,styles.width60,
										styles.logButton,
										styles.rSm, 
										styles.mtMd,
										styles.middle,
										{backgroundColor:'#bbb',borderWidth:0}
										]} 
								onPress={()=>this.signIn()}
						>
				    		<Text style={[styles.textCenter,
				    		              styles.textBlack, 
				    		              styles.middleFont]}
				    		>{(this.state.loader) ? 'Please wait...' : 'Log in'}</Text>
				    	</TouchableOpacity>
				    </View>
				</ScrollView>
			</View>
	   );
	}
}