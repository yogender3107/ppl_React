import React from 'react';
import * as api from '../../api/api';
class CategoryBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            image: "",
            username:"",
            categoryList:[]
        }
 this.handleChange = this.handleChange.bind(this);
 this.addCategory = this.addCategory.bind(this);

    }
    addCategory(e) {
        e.preventDefault();

        console.log("in the category function");
         let user = localStorage.getItem("user")
         let userJson = JSON.parse(user);

        console.log("state -->>", this.state);
        this.state.username = userJson.email;
        const {  category, image } = this.state;
        console.log("state us as", this.state);
        let formData = new FormData();
        formData.append('image', image);
        formData.append('category', this.state.category);
        
     console.log("formmdataaaaaaaaaaaa",formData);
        fetch('http://localhost:7070/category/addCategory', {
            method: "POST",
            body: formData
        }).then(response => response.json()).then(result => {
            this.props.history.push("/home");
        })

    }
    handleChange(key, e) {
        const state = this.state;
        console.log("e target us as", e.target.files);
        switch (e.target.name) {
            case 'image':
                state.image = e.target.files[0];
                break;
            default:
                state[e.target.name] = e.target.value;


        }
    }
}
export default CategoryBase;