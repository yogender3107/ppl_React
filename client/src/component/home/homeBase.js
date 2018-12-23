import React from 'react';
import * as api from '../../api/api';
import $ from "jquery";

class HomeBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      firstname: "",
      lastname: "",
      image: "",
      date: "",
      postList: [],
      categoryList: [],
      likes: [],
      likesCount: 0,
      data: {
        filter: {},
        sort: { date: -1 },
        options: { skip: 0, limit: 2 }
      },
      count: 0,

    }

    this.addLike = this.addLike.bind(this);
    // this.paging = this.paging.bind(this);
    this.scrollPaging = this.scrollPaging.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }
  componentWillMount() {
    if (!localStorage.getItem("user")) {
      this.props.history.push('/login');

    }
    api.get("/post/count").then((data) => {
      this.state.count = data.postCount
    })
    console.log("the size of the screen is ", window.outerHeight);
  }

  componentDidMount() {
    let user = localStorage.getItem("user");
    let userJson = JSON.parse(user);
    console.log("in the home did mount function");

    api.get("/category/list").
      then((data) => {
        console.log("the data at home is",data);
        this.state.categoryList = data;
        this.setState({});
      }
      )
      .
      catch(() => { })

    api.get(`/post/list?data=+${encodeURIComponent(JSON.stringify(this.state.data))}`).
      then((data) => {
        console.log("the data  of post is",data);
        this.setState({ postList: data });
        $(window).scroll(this.scrollPaging)

      })

      ;

  }
  getPosts = (filter, sort, skip) => {

    this.state.data.filter = filter;
    this.state.data.sort = sort;
    this.state.data.options.skip = skip;



    api.get(`/post/list?data=+${encodeURIComponent(JSON.stringify(this.state.data))}`).
      then((data) => {
        // window.scrollTo(0, 0);

        this.setState({ postList: data });
      })

  }




  addLike(postid) {

    let user = localStorage.getItem("user");
    let userJson = JSON.parse(user);
    let data = {
      post_id: postid,
      user_id: userJson._id,
      email: userJson.email
    }
    api.post("/post/addLike", data).then((data) => {
      this.state.likesCount++;
      console.log("likes",this.state.likesCount);
      this.setState({});
    }).catch(() => { });
  }

  paging(value) {
    if (value == "next") {
      window.scrollTo(0, 0);
      this.state.data.options.skip += this.state.data.options.limit;
      this.getPosts(this.state.data.filter, this.state.data.sort, this.state.data.options.skip);
      //this.setState({});
    }
    if (value == "previous") {
      window.scrollTo(0, 0);

      this.state.data.options.skip -= this.state.data.options.limit;
      this.getPosts(this.state.data.filter, this.state.data.sort, this.state.data.options.skip);
      //this.setState({});
    }
  }

  scrollPaging() {


    const windowScrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const documentHeight = $(document).height();
    const scrollHeight = windowScrollTop + windowHeight;

    const fetchNewDataHeight = 5;
    if (scrollHeight + fetchNewDataHeight >= documentHeight) {
      console.log("in the if condition odf scroll paging function");

      if (this.state.data.options.skip + this.state.data.options.limit < this.state.count) {
        console.log("skip", this.state.data.options.skip);
        this.state.data.options.skip += this.state.data.options.limit;
        console.log("int the inner if");
        api.get(`/post/list?data=+${encodeURIComponent(JSON.stringify(this.state.data))}`).
          then((data) => {
            console.log("new data", data);
            this.state.postList = this.state.postList.concat(data);
            this.setState({});
            console.log("data is ", this.state.postList);


          })

      }
    }

  }

}
export default HomeBase;
