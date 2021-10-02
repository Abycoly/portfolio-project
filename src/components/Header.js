import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div className="div header-wraper">
			<div className="main-info">
				<h1>Web development and websites promotions</h1>
				<Typed
				className="typed-text"
				strings={["Web Design", "Web development","Facebook Ads","Google Ads"]}
				typeSpeed={40}
				backSpeed={60}
				loop
				/>
				<a href="#" className="btn-main-offer">Contact me</a>
			</div>
		</div>
	)
}

export default Header
