import React from 'react';

import { FaFacebookSquare, FaTwitch, FaInstagram } from 'react-icons/fa';

import Layout from '../layout/layout';

const Profilepage = () => {
	const user = {
		id: '0',
		username: 'JohnRandom42',
		social: {
			facebook: 'www.facebook.com',
			twitch: 'www.twitch.com'
		},
		eventname: 'Testing com $55k guarantie',
		packages: [
			{
				id: '0',
				percentage: 10,
				price: 123
			},
			{
				id: '1',
				percentage: 25,
				price: 155
			},
			{
				id: '2',
				percentage: 50,
				price: 1500
			}
		]
	};

	return (
		<Layout>
			<div
				style={{
					display: 'flex',
					backgroundColor: '#333',
					color: '#fff'
				}}
			>
				<div
					className="aside"
					style={{
						backgroundColor: '#ccc',
						color: '#000',
						height: '100%',
						width: '30rem',
						padding: '2rem',
						textAlign: 'center'
					}}
				>
					<div
						className="image"
						style={{
							width: '12.5rem',
							height: '12.5rem',
							borderRadius: '50%',
							backgroundColor: '#333',
							margin: '0 auto 2rem'
						}}
					/>
					<p style={{ fontSize: '1.8rem', fontWeight: 'bolder', marginBottom: '1rem' }}>{user.username}</p>
					<div
						className="social-icons"
						style={{
							marginBottom: '1rem'
						}}
					>
						<a
							style={{
								fontSize: '4rem',
								color: '#000'
							}}
							href={user.social.facebook}
						>
							<FaFacebookSquare />
						</a>
						<a
							style={{
								fontSize: '4rem',
								color: '#000'
							}}
							href={user.social.twitch}
						>
							<FaTwitch />
						</a>
						<a
							style={{
								fontSize: '4rem',
								color: '#000'
							}}
							href={user.social.twitch}
						>
							<FaInstagram />
						</a>
					</div>
					<div className="bio" style={{ backgroundColor: '#eee', padding: '2rem' }}>
						<h4 style={{ marginBottom: '1rem' }}>info</h4>
						<p style={{ textAlign: 'justify' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem eligendi repellat
							perspiciatis praesentium, nulla sint libero, dolores consequatur modi eum cumque sit
							voluptatum? Harum vitae tenetur sed. Distinctio, itaque!
						</p>
					</div>
					<button
						style={{
							width: '100%',
							padding: '1rem',
							marginTop: '2rem'
						}}
					>
						Add package
					</button>
				</div>
				<div
					className="content"
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%'
					}}
				>
					<ul
						className="menu"
						style={{
							listStyle: 'none',
							display: 'flex',
							width: '100%',
							justifyContent: 'space-evenly',
							padding: '2rem'
						}}
					>
						<li>Menu item 1</li>
						<li>Menu item 2</li>
						<li>Menu item 3</li>
					</ul>
					<div className="menu-container">event packages</div>
				</div>
			</div>
		</Layout>
	);
};

export default Profilepage;
