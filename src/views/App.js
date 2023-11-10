import './App.scss';
import ListTodo from './todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Nav from './nav/Nav';
import Home from './Home';
import About from './About';
import ListUser from './user/ListUser';
import UserDetail from './user/UserDetail';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	// const App = () => {
	return (
		<div className="App">
			<Router>
				<Nav />
				<div className="container">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/todo">
							<ListTodo />
						</Route>

						<Route path="/about">
							<About />
						</Route>

						<Route exact path="/user">
							<ListUser />
						</Route>

						<Route path="/user/:id">
							<UserDetail />
						</Route>
					</Switch>
				</div>
			</Router>

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</div>
	);
}

export default App;
