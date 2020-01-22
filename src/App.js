import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Homepage />
				</Route>
				<Route path="/profile" />
				<Route path="/inbox" />
				<Redirect from="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
