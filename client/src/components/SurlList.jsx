import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { createSurlAction, resetSurlAction, resetSurlErrorAction, fetchSurlsAction } from '../actions/surlActions';
import { getShortUrl } from '../utils/shortUrl';

import './scss/surlList.scss';

class SurlList extends Component {
	state = {
		cleanup: null,
		search: ''
	};

	componentDidMount() {
		this.props.fetchSurlsAction();
	}

	componentDidUpdate() {
		const { surl, surlError } = this.props;
		const { cleanup } = this.state;

		if (cleanup && surl && !surlError) {
			cleanup();
			this.setState({
				cleanup: null
			});
		}
	}

	handleChange = ({ target: { id, value } }) => {
		this.setState({
			[id]: value
		});
	};

	prepareData() {
		const { search } = this.state;
		const searchStr = search.toLowerCase();

		return this.props.surls.filter(
			({ fullUrl, shortUrl }) =>
				fullUrl.toLowerCase().includes(searchStr) || shortUrl.toLowerCase().includes(searchStr)
		);
	}

	renderTableHeading() {
		const { search } = this.state;

		return (
			<thead>
				<tr>
					<th>No.</th>
					<th>Short URL</th>
					<th>
						Full URL
						<label for="search" className="sr-only">
							Search
						</label>
						<input
							id="search"
							type="search"
							placeholder="Search urls"
							value={search}
							onChange={this.handleChange}
							className=""
						/>
					</th>
				</tr>
			</thead>
		);
	}

	renderTableRows(surls) {
		return surls.map(({ fullUrl, shortUrl }, idx) => {
			const id = idx + 1;
			return (
				<tr key={`surl_${id}`}>
					<th>{id}</th>
					<td>
						<a href={shortUrl} target="_blank" rel="noreferrer">
							{shortUrl}
						</a>
					</td>
					<td>
						<a href={fullUrl} target="_blank" rel="noreferrer">
							{fullUrl}
						</a>
					</td>
				</tr>
			);
		});
	}

	renderNoResults() {
		return (
			<tr>
				<td colSpan="3">No short URLS found</td>
			</tr>
		);
	}

	formSubmit = ({ fullUrl }, { resetForm }) => {
		const { createSurlAction, resetSurlAction, resetSurlErrorAction } = this.props;

		const payload = {
			fullUrl,
			shortUrl: getShortUrl()
		};

		resetSurlAction();
		resetSurlErrorAction();
		this.setState({
			cleanup: () => {
				resetForm();
			}
		});

		createSurlAction(payload);
	};

	formReset = () => {
		this.props.resetSurlErrorAction();
	};

	formValidate = () => {
		this.props.resetSurlErrorAction();
	};

	render() {
		const surls = this.prepareData();
		const { surlError } = this.props;

		return (
			<Formik
				initialValues={{
					fullUrl: ''
				}}
				validationSchema={Yup.object().shape({
					fullUrl: Yup.string().required('Full URL is required').url('Full URL not recognised')
				})}
				validate={this.formValidate}
				onReset={this.formReset}
				onSubmit={this.formSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<table>
							{this.renderTableHeading()}
							<tbody>
								{surls.length > 0 && this.renderTableRows(surls)}
								{surls.length <= 0 && this.renderNoResults()}
								<tr>
									<td />
									<td />
									<td>
										<label for="fullUrl" className="sr-only">
											Full URL
										</label>
										<Field
											id="fullUrl"
											name="fullUrl"
											type="text"
											placeholder="Example: http://www.bbc.co.uk"
											className={`full-url${errors.fullUrl && touched.fullUrl
												? ' is-invalid'
												: ''}`}
										/>
										<button type="submit">
											<span className="sr-only">Submit</span>
											<i className="fas fa-check fa-fw" />
										</button>
										<button type="reset">
											<span className="sr-only">Reset</span>
											<i className="fas fa-times fa-fw" />
										</button>
										<ErrorMessage name="fullUrl" component="div" className="invalid-feedback" />
										{surlError && <div className="invalid-feedback">{surlError.error}</div>}
									</td>
								</tr>
							</tbody>
						</table>
					</Form>
				)}
			</Formik>
		);
	}
}

const mapStateToProps = ({ surl, surlError, surls }) => {
	return {
		surl,
		surlError,
		surls
	};
};

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators(
			{
				createSurlAction,
				resetSurlAction,
				resetSurlErrorAction,
				fetchSurlsAction
			},
			dispatch
		),
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SurlList);
