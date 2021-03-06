import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.css';

// Components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Navbar';

// firebase init
import firebaseConfig from './Config/FirebaseConfig';
firebase.initializeApp(firebaseConfig);

const App = () => {
	const [user, setUser] = useState(null);

	return (
		<Router>
			<ToastContainer />
			<UserContext.Provider value={{ user, setUser }}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signin" component={Signin} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="*" component={PageNotFound} />
				</Switch>
				<Footer />
			</UserContext.Provider>
		</Router>
	);
};

export default App;
