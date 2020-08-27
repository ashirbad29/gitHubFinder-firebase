import React, { useContext, useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	NavbarText,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { UserContext } from '../Context/UserContext';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const context = useContext(UserContext);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Navbar color="info" light expand="md">
			<NavbarBrand>
				<Link to="/" className="text-white">
					GithubFinder
				</Link>
			</NavbarBrand>
			<NavbarText className="text-white">
				{context.user?.email ? context.user.email : ''}
			</NavbarText>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					{context.user ? (
						<NavItem>
							<NavLink tag={Link} to="/" className="text-white">
								Logout
							</NavLink>
						</NavItem>
					) : (
						<>
							<NavItem>
								<NavLink tag={Link} to="/signup" className="text-white">
									Signup
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/" className="text-white">
									Login
								</NavLink>
							</NavItem>
						</>
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
