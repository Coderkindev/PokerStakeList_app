import React from 'react';
import { FaFacebookSquare, FaTwitch, FaInstagram } from 'react-icons/fa';

const StakeCard = ({ stake: { username, social, eventname, packages } }) => {
	return (
		<div
			style={{
				backgroundColor: '#333',
				color: '#fff',
				width: '35rem',
				margin: '1.5rem 2rem'
			}}
		>
			<div
				className="header"
				style={{
					backgroundColor: '#ccc',
					color: '#000',
					padding: '2rem',
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<div
					className="image"
					style={{
						backgroundColor: '#333',
						width: '12rem',
						height: '12rem',
						borderRadius: '50%'
					}}
				/>
				<div
					className="column"
					style={{
						width: '50%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}
				>
					<div>
						<p>Name:</p>
						<span style={{ fontWeight: 'bolder' }}>{username}</span>
					</div>
					<div>
						<p>Social:</p>
						<a
							style={{
								fontSize: '4rem',
								color: '#000'
							}}
							href={social.facebook}
						>
							<FaFacebookSquare />
						</a>
						<a
							style={{
								fontSize: '4rem',
								color: '#000'
							}}
							href={social.twitch}
						>
							<FaTwitch />
						</a>
						<a
							style={{
								fontSize: '4rem',
								color: '#000'
							}}
							href={social.twitch}
						>
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
			<div className="body" style={{ padding: '2rem' }}>
				<h3 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'lighter' }}>{eventname}</h3>
				{packages.map((pack) => {
					return (
						<div
							key={pack.id}
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								backgroundColor: '#555',
								padding: '1rem 2rem',
								marginBottom: '1rem'
							}}
						>
							<span>{pack.percentage}%</span>
							<span>£{pack.price}</span>
							<button
								style={{
									cursor: 'pointer',
									backgroundColor: '#eee',
									border: 'none',
									borderRadius: '2.5rem',
									padding: '0.5rem 1.5rem'
								}}
							>
								Buy
							</button>
						</div>
					);
				})}

				<button
					style={{
						cursor: 'pointer',
						width: '100%',
						backgroundColor: '#eee',
						border: 'none',
						fontFamily: 'inherit',
						fontSize: '1.8rem',
						padding: '1rem',
						marginTop: '1rem'
					}}
				>
					more info
				</button>
			</div>
		</div>
	);
};

export default StakeCard;
