import React, {Component} from 'react';
import {connect} from "react-redux";
import Axios from 'axios';
import jwt_decode from "jwt-decode";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            username: '',
            comment: ''
        }
    }
    onChangeComment(e) {
      this.setState({
        comment: e.target.value,
        username: ''
      });
    }
  
    onSubmit(e) {
      e.preventDefault();
      const itineraryId = this.props.itineraryId
      const decoded = jwt_decode(localStorage.token)
      // console.log('localStorag.tokenXXXXXX', decoded)
      const obj = {
        comment: this.state.comment,
        username: decoded.username,
        itineraryId
      }
      // console.log('itineraryId', itineraryId)
       Axios
                .post("http://localhost:5000/comments/add", obj)
            .then(res => console.log(res.data));
      // console.log(`The values are ${this.props.login.username}, ${this.state.comment}`)
      window.location.reload();
      this.setState({
        comment: '',
        username: '',
        itineraryId: this.props.itineraryId
      })
    }
   
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Comments</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Add comment</label>
                        <input 
                          type="hidden" 
                          className="form-control" 
                          value={this.props.login.username}
                          onChange={this.onChangeComment}
                          />
                    </div>
                    <div className="form-group">
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.comment}
                          onChange={this.onChangeComment}
                          />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Post" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
  }

const mapStateToProps = state => {
    // console.log("CommentsRedux", state)
    return {login: state.login};
};

export default connect(mapStateToProps)(Comments);