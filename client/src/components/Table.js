import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Table extends Component {
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
            <button className="btn btn-danger">Delete</button>
          </td>
          </tr>
    );
  }
}

export default Table;