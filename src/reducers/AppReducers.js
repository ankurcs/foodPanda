import {
	HANDLE_INITIAL_APP_ACTION,
	INIT_APP_WITHOUT_LOGIN,
	INIT_APP_AFTER_LOGIN,
	HANDLE_LOADING_STAGE
} from './Action';

//import _ from 'underscore';

const initialState = {
  isLoggedIn: false,
  isAppInstalled: false,
  isLoading: false,
};

function app (state = initialState, action) {
  switch (action.type) {
	    case INIT_APP_WITHOUT_LOGIN: {
	      return {
	        ...state,
	        isLoading: false,
	        isLoggedIn: false,
	      };
	    }
	    case INIT_APP_AFTER_LOGIN: {
	    	return {
	    		...state,
	    		isLoading: false,
	    		isLoggedIn: true
	    	}
	    }
	    case HANDLE_LOADING_STAGE: {
	    	return {
	    		...state,
	    		isLoading: action.status
	    	}
	    }
	    default:
	    return state;
  	}
}

module.exports = app;
