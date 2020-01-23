import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage';
import Profilepage from './pages/profilepage';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/profile">
					<Profilepage />
				</Route>
				<Route path="/inbox" />
				<Redirect from="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
