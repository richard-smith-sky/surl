import SurlList from '../components/SurlList';

import './scss/app.scss';

function App() {
	return (
		<div className="App">
			<header>
				<h1>Short URL Service</h1>
			</header>
			<main>
				<SurlList />
			</main>
		</div>
	);
}

export default App;
