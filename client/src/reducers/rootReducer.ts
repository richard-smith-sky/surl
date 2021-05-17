import { combineReducers } from 'redux';

import { surlReducer, surlErrorReducer, surlsReducer, surlsErrorReducer } from './surlReducers';

export default combineReducers({
	surl: surlReducer,
	surlError: surlErrorReducer,
	surls: surlsReducer,
	surlsError: surlsErrorReducer
});
