/*
FileName : Main.js(Contain All Component for App)
Author	 : Ankur Gupta
Last Updated : 17 Aug 2017
*/
import React, {Component} from 'react';
import Login from './Login';	
import Menu from './Menu';
import Detail from './Detail';

import { connect } from 'react-redux/src';
import {Router, Route, Schema, Scene, Reducer, Actions } from 'react-native-router-flux';

 export class Main extends React.Component {
	constructor (props) {
	    super(props);
	}

	render () {
		return(
			<Router>
			    <Scene key="root"  hideTabBar={false} renderBackButton={'Closure'}>
			    	<Scene key="login" component={Login} title="Sign In" initial={true} />
			    	<Scene key="menu" component={Menu} title="Menu" hideNavBar = {true} />
			    	<Scene key="detail" component={Detail} title="Detail"/>
			    </Scene>
			</Router>
		)
	}
}

function mapStateToProps (state) {
	const { app } = state;
	return { app };
}
export default connect(mapStateToProps)(Main);