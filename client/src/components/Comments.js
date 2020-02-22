import React, {Component} from 'react';
import {connect} from "react-redux";

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
        comment: e.target.value
      });
    }
  
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.comment}`)
      this.setState({
        comment: ''
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
    console.log("CommentsRedux", state)
    return {login: state.login};
};

export default connect(mapStateToProps)(Comments);