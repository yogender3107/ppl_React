import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Register from './component/register/register'
// import Register from '../component/register/register';
import Login from './component/login/login';
// import Home from '../component/home';
import Home from './component/home/home';
import PostForm from './component/post/postForm';
import Timeline from './component/timeline/timeline';
import Category from './component/category/category';
import SinglePost from './component/singlePost/singlePost';
import App1 from './app1';
class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact  path="/" component={App1} />
				<Route exact path="/signup" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/createPost" component={PostForm} />
				<Route exact path="/timeline" component={Timeline} />
				<Route exact path="/addCategory" component={Category} />
				<Route  exact path="/singlePost/:id" component={SinglePost} />
			</Switch>
		);
	}
}
export default App;


