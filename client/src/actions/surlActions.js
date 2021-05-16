import { createSurl, fetchSurls } from '../api';
import { FETCH_SURLS, FETCH_SURLS_ERROR, CREATE_SURL, CREATE_SURL_ERROR } from './actionTypes';

export const fetchSurlsAction = () => async (dispatch) => {
	const request = fetchSurls();

	return request.then(
		(response) =>
			dispatch({
				type: FETCH_SURLS,
				surls: response.data.data
			}),
		(err) =>
			dispatch({
				type: FETCH_SURLS_ERROR,
				err
			})
	);
};

export const createSurlAction = (surl) => async (dispatch) => {
	const request = createSurl(surl);

	return request.then(
		(response) => {
			dispatch({
				type: CREATE_SURL,
				surl: response.data
			});
			dispatch(fetchSurlsAction());
		},
		(err) =>
			dispatch({
				type: CREATE_SURL_ERROR,
				err: err.response ? err.response.data : err
			})
	);
};

export const resetSurlAction = () => async (dispatch) => {
	dispatch({
		type: CREATE_SURL,
		surl: null
	});
};

export const resetSurlErrorAction = () => async (dispatch) => {
	dispatch({
		type: CREATE_SURL_ERROR,
		err: null
	});
};
