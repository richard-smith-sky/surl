import { CREATE_SURL, CREATE_SURL_ERROR, FETCH_SURLS, FETCH_SURLS_ERROR } from '../actions/actionTypes';

const surlInitialState: string | null = null;
const surlErrorInitialState: string | null = null;
const surlsInitialState: ISurl[] = [];
const surlsErrorInitialState: string | null = null;

const surlReducer = (state = surlInitialState, action: ISurlAction) => {
	switch (action.type) {
		case CREATE_SURL:
			return action.surl;
		default:
			return state;
	}
};

const surlErrorReducer = (state = surlErrorInitialState, action: ISurlErrorAction) => {
	switch (action.type) {
		case CREATE_SURL_ERROR:
			return action.err;
		default:
			return state;
	}
};

const surlsReducer = (state = surlsInitialState, action: ISurlsAction) => {
	switch (action.type) {
		case FETCH_SURLS:
			return action.surls;
		default:
			return state;
	}
};

const surlsErrorReducer = (state = surlsErrorInitialState, action: ISurlsErrorAction) => {
	switch (action.type) {
		case FETCH_SURLS_ERROR:
			return action.err;
		default:
			return state;
	}
};

export { surlReducer, surlErrorReducer, surlsReducer, surlsErrorReducer };
