import React from 'react';
import * as api from '../../api/api';

class HeaderBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(key, e) {
        this.setState({ [key]: e.target.value });
        console.log("the value of", e.target.value);


    }
    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            console.log("the valaue of search is", this.state.search);
            this.props.getPostsParent({ title: { $regex: this.state.search, $options: 'i' } }, {}, 0);
            console.log("the function is running");
        }
    }



}
export default HeaderBase;