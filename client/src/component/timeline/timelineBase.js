import React from 'react';
import * as api from '../../api/api';
class TimelineBase extends React.Component {

  componentWillMount() {
    if (localStorage.getItem("user")) {
      this.props.history.push("/timeline");
    }
    else {
      this.props.history.push('/signup');
    }
  }
}
export default HomeBase;