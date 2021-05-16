import { CREATE_SURL, CREATE_SURL_ERROR, FETCH_SURLS, FETCH_SURLS_ERROR } from '../actions/actionTypes';

const surlInitialState = null;
const surlErrorInitialState = null;
const surlsInitialState = [];
const surlsErrorInitialState = null;

const surlReducer = (state = surlInitialState, action) => {
	switch (action.type) {
		case CREATE_SURL:
			return action.surl;
		default:
			return state;
	}
};

const surlErrorReducer = (state = surlErrorInitialState, action) => {
	switch (action.type) {
		case CREATE_SURL_ERROR:
			return action.err;
		default:
			return state;
	}
};

const surlsReducer = (state = surlsInitialState, action) => {
	switch (action.type) {
		case FETCH_SURLS:
			return action.surls;
		default:
			return state;
	}
};

const surlsErrorReducer = (state = surlsErrorInitialState, action) => {
	switch (action.type) {
		case FETCH_SURLS_ERROR:
			return action.err;
		default:
			return state;
	}
};

export { surlReducer, surlErrorReducer, surlsReducer, surlsErrorReducer };
