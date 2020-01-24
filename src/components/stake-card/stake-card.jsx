import React from 'react';
import { FaFacebookSquare, FaTwitch, FaInstagram } from 'react-icons/fa';
import './stake-card.styles.scss';

const StakeCard = ({ stake: { username, social, eventname, packages } }) => {
	return (
		<div className="card">
			<div className="card__header">
				<div className="user-info">
					<div className="image" />
					<div className="column">
						<div>
							<p>Name:</p>
							<span className="username">{username}</span>
						</div>
						<div>
							<p>Social:</p>
							<a className="icon" href={social.facebook}>
								<FaFacebookSquare />
							</a>
							<a className="icon" href={social.twitch}>
								<FaTwitch />
							</a>
							<a className="icon" href={social.twitch}>
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="card__body">
				<div className="event-info">
					<h3>{eventname}</h3>
					<h3>Buy-in: £5.800</h3>

					<div className="percentage-markdown">
						<div>
							<p>85%</p>
							<span>for sale</span>
						</div>
						<div>
							<p>1.25</p>
							<span>Markdown</span>
						</div>
					</div>
					<button>more info</button>
				</div>

				<div className="packages">
					{packages.map((pack) => {
						return (
							<div key={pack.id} className="package">
								<span>{pack.percentage}%</span>
								<span>£{pack.price}</span>
								<button>Buy</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default StakeCard;
