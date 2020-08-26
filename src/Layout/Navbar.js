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

	const userContext = useContext(UserContext);

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
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink tag={Link} to="/" className="text-white">
							Signup
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to="/" className="text-white">
							Singnin
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to="/" className="text-white">
							Logout
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
