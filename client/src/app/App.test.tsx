import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';

import App from './App';

const middlewares = [ reduxThunk ];
const mockStore = configureStore(middlewares);

describe('App', () => {
	let store: any;

	beforeEach(() => {
		store = mockStore({
			surls: []
		});
	});

	test('renders heading correctly', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(screen.getByRole('heading')).toHaveTextContent('Short URL Service');
	});
});
