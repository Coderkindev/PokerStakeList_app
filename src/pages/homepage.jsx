import React from 'react';

import Layout from '../layout/layout';

import StakeCard from '../components/stake-card/stake-card';

const Homepage = () => {
	const stakeList = [
		{
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
		},
		{
			id: '1',
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
		},
		{
			id: '2',
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
		},
		{
			id: '3',
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
		},
		{
			id: '4',
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
		},
		{
			id: '5',
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
		}
	];
	return (
		<Layout>
			<div
				style={{
					// display: 'flex',
					// flexWrap: 'wrap',
					// justifyContent: 'space-evenly'
				}}
			>
				{stakeList.map((stake) => <StakeCard key={stake.id} stake={stake} />)}
			</div>
		</Layout>
	);
};

export default Homepage;
