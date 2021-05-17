import { surlReducer, surlErrorReducer, surlsReducer, surlsErrorReducer } from './surlReducers';
import { CREATE_SURL, CREATE_SURL_ERROR, FETCH_SURLS, FETCH_SURLS_ERROR } from '../actions/actionTypes';

describe('surl reducers', () => {
	it('surlReducer should return the initial state', () => {
		expect(surlReducer(undefined, {})).toEqual(null);
	});

	it('surlReducer should handle CREATE_SURL', () => {
		expect(
			surlReducer([], {
				type: CREATE_SURL,
				surl: {
					fullUrl: 'abc',
					shortUrl: 'def'
				}
			})
		).toEqual({
			fullUrl: 'abc',
			shortUrl: 'def'
		});
	});

	it('surlErrorReducer should return the initial state', () => {
		expect(surlErrorReducer(undefined, {})).toEqual(null);
	});

	it('surlErrorReducer should handle CREATE_SURL_ERROR', () => {
		expect(
			surlErrorReducer([], {
				type: CREATE_SURL_ERROR,
				err: 'there is an error'
			})
		).toEqual('there is an error');
	});

	it('surlsReducer should return the initial state', () => {
		expect(surlsReducer(undefined, {})).toEqual([]);
	});

	it('surlsReducer should handle FETCH_SURLS', () => {
		expect(
			surlsReducer([], {
				type: FETCH_SURLS,
				surls: [
					{
						fullUrl: 'abc',
						shortUrl: 'def'
					},
					{
						fullUrl: 'ghi',
						shortUrl: 'jkl'
					}
				]
			})
		).toEqual([
			{
				fullUrl: 'abc',
				shortUrl: 'def'
			},
			{
				fullUrl: 'ghi',
				shortUrl: 'jkl'
			}
		]);
	});

	it('surlsErrorReducer should return the initial state', () => {
		expect(surlsErrorReducer(undefined, {})).toEqual(null);
	});

	it('surlsErrorReducer should handle FETCH_SURLS_ERROR', () => {
		expect(
			surlsErrorReducer([], {
				type: FETCH_SURLS_ERROR,
				err: 'there is an error'
			})
		).toEqual('there is an error');
	});
});
