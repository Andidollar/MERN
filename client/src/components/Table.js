import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class Table extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        Axios.get('http://localhost:5000/comments/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr key={this.props.obj.itineraryId}>
        <td><b>
            {this.props.obj.username}</b>
          </td>
          <td>
            {this.props.obj.comment}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
          </tr>
    );
  }
}

export default Table;