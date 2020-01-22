import React from 'react';

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const Layout = ({ children }) => {
	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh'
			}}
		>
			<Navbar />
			<main
				style={{
					maxWidth: '120rem',
					margin: '0 auto'
				}}
			>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
