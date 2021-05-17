import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';

import SurlList from './SurlList';

const middlewares = [ reduxThunk ];
const mockStore = configureStore(middlewares);

describe('SurlList', () => {
	let store: any;

	beforeEach(() => {
		store = mockStore({
			surls: [
				{ fullUrl: 'http://www.test.com', shortUrl: 'https://pbid.io/f3x2ab1c' },
				{ fullUrl: 'http://www.fail.com', shortUrl: 'https://pbid.io/7s52h9d5' }
			]
		});
	});

	test('renders table elements correctly', () => {
		render(
			<Provider store={store}>
				<SurlList />
			</Provider>
		);

		expect(screen.getByRole('table')).toBeDefined();
		expect(screen.getAllByRole('columnheader')).toHaveLength(6); // 3 top, 3 side
		expect(screen.getAllByRole('row')).toHaveLength(4); // 1 header row, 2 data rows, 1 form row
	});

	test('renders form elements correctly', () => {
		render(
			<Provider store={store}>
				<SurlList />
			</Provider>
		);

		expect(screen.getByRole('searchbox')).toBeDefined();
		expect(screen.getByRole('textbox')).toBeDefined();

		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(2);
		expect(buttons[0]).toHaveTextContent('Submit');
		expect(buttons[1]).toHaveTextContent('Reset');
	});

	test('renders empty store correctly', () => {
		store = mockStore({
			surls: []
		});

		render(
			<Provider store={store}>
				<SurlList />
			</Provider>
		);

		const rows = screen.getAllByRole('row');
		expect(rows).toHaveLength(3); // 1 header row, 1 'no data' row, 1 form row
		expect(rows[1]).toHaveTextContent('No short URLS found');
	});
});
