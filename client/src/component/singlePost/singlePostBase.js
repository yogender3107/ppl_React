import React from 'react';
import * as api from '../../api/api';
class SinglePostBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            image: "",
            date: "",
            likes: [],
            commentText: "",
            comment: [],
            firstname: "",
            lastname: "",

        }
        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    componentWillMount() {

        console.log("this is state before", this.state);
        let id = this.props.match.params.id;
        console.log("iddddddd", id);
        api.get(`/post/singlePost/${id}`).then((data) => {
            console.log("dataaaaaaaaaaaaaaaaaaaaaa", data);
            console.log("after state", this.state);
            this.setState({ ...data });
        })
    } catch(err) {
        console.log(err);
    }

    handleChange(key, e) {
        this.setState({ [key]: e.target.value })
    }

    addComment(e) {
        e.preventDefault();
        console.log("in the add comment function");
        let user = localStorage.getItem("user")
        let userJson = JSON.parse(user);
        console.log("state -->>", this.state);
        this.state.username = userJson.email;
        //const { title, category, image } = this.state;
        console.log("state us as", this.state);
        let post_id = this.props.match.params.id;
        let data = {
            id: post_id,
            firstname: userJson.firstname,
            comment: this.state.commentText,
            username: userJson.email,
        }

        api.post("/post/singlepost/comment", data).then(() => {
            console.log("commment from");
            this.state.comment.push({ username: userJson.email, comment: this.state.commentText ,firstname:userJson.firstname});
            // this.state.commentText="";
            // this.setState({commentText:""});
            this.setState({ commentText: "" });

        })
    }











}
export default SinglePostBase;