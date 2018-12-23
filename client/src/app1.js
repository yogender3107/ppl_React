import Header from './subcomponent/header/header';
import React, { Fragment } from 'react';
import Footer from './subcomponent/footer';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './component/home/home';
import PostForm from './component/post/postForm';
import Timeline from './component/timeline/timeline';
import Category from './component/category/category';
import SinglePost from './component/singlePost/singlePost';
class App1 extends React.Component {
	componentWillMount() {

		if (localStorage.getItem("user")) {
			this.props.history.push("/home");
		}
		else {

			this.props.history.push('/login');
		}
	}
	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
				
         <Route path="/createPost" component={PostForm} />
					
					<Route path="/timeline" component={Timeline} />
					<Route path="/addCategory" component={Category} />
					<Route path="/singlePost/:id" component={SinglePost} />
				</Switch>
				< Footer />
			</Fragment>
		)
	}
}
export default App1;
