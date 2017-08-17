export const HANDLE_INITIAL_APP_ACTION = 'HANDLE_INITIAL_APP_ACTION';
export const INIT_APP_WITHOUT_LOGIN    = 'INIT_APP_WITHOUT_LOGIN';
export const INIT_APP_AFTER_LOGIN      = 'INIT_APP_AFTER_LOGIN';
export const HANDLE_LOADING_STAGE      = 'HANDLE_LOADING_STAGE';

import firebase from 'firebase';

export function connectFirebase (data,callback=function(){}) {
	let email 	 = data.email;
	let password = data.password;
	let ref  	 = new firebase("https://armentum-cfca3.firebaseio.com/users/");
	ref.on("value", function(snapshot) {
		let listObj = snapshot.val();
		for ( let i in listObj ) {
			if ( listObj[i]['email'] === email && listObj[i]['password'] === password ) {
				callback (1);
				return;
			}
		}
		callback (0);
	}, function (error) {
	   callback(0);
	});
}

export function validateMail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}