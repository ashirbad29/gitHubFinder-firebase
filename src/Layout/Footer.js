import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
	return (
		<Container
			fluid
			tag="footer"
			className="text-center bg-info text-white text-uppercases fixed-bottom p-3"
		>
			Ashirbad's Github search app with Firebase
		</Container>
	);
};

export default Footer;
