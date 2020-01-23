import React from 'react';

const Navbar = () => {
	return (
		<nav
			style={{
				width: '100%',
				height: '8rem',
				backgroundColor: '#333',
				color: '#fff'
			}}
		>
			<div
				className="container"
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					height: 'inherit',
					alignItems: 'center',
					maxWidth: '120rem',
					margin: '0 auto',
					padding: '2rem'
				}}
			>
				<div>
					<a
						href="/"
						style={{ color: 'white', fontSize: '4rem', fontWeight: 'bolder', textDecoration: 'none' }}
					>
						LOGO
					</a>
				</div>
				<ul
					style={{
						listStyle: 'none',
						display: 'flex',
						fontSize: '1.8rem'
					}}
				>
					<li>
						<a
							href="https://dreamy-albattani-5b6a08.netlify.com/signin"
							style={{ color: 'white', textDecoration: 'none', marginRight: '2rem' }}
						>
							Log in
						</a>
					</li>
					<li>
						<a
							href="https://dreamy-albattani-5b6a08.netlify.com/signup"
							style={{
								textDecoration: 'none',
								padding: '0.8rem 2.3rem',
								backgroundColor: '#fff',
								color: '#000'
							}}
						>
							Sign up
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
