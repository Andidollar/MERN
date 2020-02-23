import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            comment: ''
        }
    }

  componentDidMount() {
      axios.get('http://localhost:5000/comments/edit/'+this.props.match.params.id)
          .then(res => {
              this.setState({ 
                comment: res.data.comment });
          })
          .catch(function (error) {
              console.log(error);
          })

    }

  onChangeComment(e) {
    this.setState({
      comment: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        comment: this.state.comment
    };
    axios.post('http://localhost:5000/comments/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.goBack();
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
        <h2>Comments</h2>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.comment}
                  onChange={this.onChangeComment}
                  />
            </div>
            <div className="form-group">
                <input type="submit" value="Update" className="btn btn-primary"/>
            </div>
        </form>
    </div>
    )
  }
}