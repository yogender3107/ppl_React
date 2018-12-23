import React from 'react';
import * as api from '../../api/api';
class PostBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            image: "",
            title: "",
            category: "",
            date: new Date(),
            time: new Date().toLocaleTimeString('en-US'),
            categoryList: [],
           
          
           

        }
        this.createPost = this.createPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        if (!localStorage.getItem("user")) {
            this.props.history.push('/login');
        }
        api.get('/category/list').
            then((data) => {
                console.log("catttttttttt dataaaaaaaaaaaaa", data);

                this.setState({ categoryList: data });
                console.log("category is ", this.state.categoryList);

            }).catch(() => { });
    }


    createPost(e) {
        console.log("in the create post function");
        e.preventDefault();


        console.log("in the register function");
        let user = localStorage.getItem("user")
        let userJson = JSON.parse(user);

        this.state.username = userJson.email;
        const { title, category, image } = this.state;
        console.log("state us as", this.state);
        let formData = new FormData();
        formData.append('image', image);
        formData.append('title', this.state.title);
        formData.append('category', this.state.category);
    //    formData.append('date',this.state.date);
       formData.append('time',this.state.time);
        formData.append('username', userJson.email);
        formData.append("firstname", userJson.firstname);
        formData.append("lastname", userJson.lastname);

console.log("formData issssssssss",formData);
        fetch('http://localhost:7070/post/createPost', {
            method: "POST",
            body: formData
        }
        ).then(response => response.json()).then(result => {
            console.log('result  of post is as', result);
           this.props.history.push("/home");
        })

    }

    handleChange(key, e) {

        const state = this.state;
        console.log("e target us as", e.target.files, e.target.value);
        switch (e.target.name) {
            case 'image':
                state.image = e.target.files[0];
                break;
            default:
                state[e.target.name] = e.target.value;
        }
        this.setState(state);
    }
   







}
export default PostBase;