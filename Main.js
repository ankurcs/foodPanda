import React, {Component} from 'react';
import {
	Router, 
	Scene 
} from 'react-native-router-flux';

import Login from './Login';	
import Menu from './Menu';
import Detail from './Detail';
 export default class Main extends React.Component {
	constructor (props) {
	    super(props);
	}

	render () {
		return(
			<Router>
			    <Scene key="root"  hideTabBar={false} renderBackButton={'Closure'}>
			    	<Scene key="login" component={Login} title="Sign In" initial={true} />
			    	<Scene key="menu" component={Menu} title="Menu" />
			    	<Scene key="detail" component={Detail} title="Detail"/>
			    </Scene>
			</Router>
		)
	}
}
