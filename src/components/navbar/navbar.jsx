import React from 'react';

import './navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div>
					<a href="/" className="logo">
						LOGO
					</a>
				</div>
				<ul className="navbar-nav">
					<li>
						<a href="https://dreamy-albattani-5b6a08.netlify.com/signin" className="nav-link">
							Log in
						</a>
					</li>
					<li>
						<a href="https://dreamy-albattani-5b6a08.netlify.com/signup" className="cta">
							Sign up
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
