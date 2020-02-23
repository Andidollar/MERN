import React, { Component } from 'react';
import Axios from 'axios';
import Table from './Table';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {all: []};
    }
    componentDidMount(){
      Axios.get('http://localhost:5000/comments/all')
        .then(res => {
          
          console.log('response.data', res.data)
          // const allComments = res.data;
          this.setState({ all: res.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.all.map(function(object, i){
          return <Table obj={object} key={i} />;
      });
    }
//    mapComments = () => {
//        this
//        .state
//        .allComments
//        .map(c => {
//            return
//            <div key={c.itineraryId}>
//               <p>{c.comment}</p>
//            </div>
//        })
//    }


// {cities && cities.map((city) => (
//     <div key={city._id}>

    render() {
        // console.log('allComments', allComments)
        // const comments = this.mapComments()
        // console.log('this.state.allComments', this.state.allComments)
      return (
       
         
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <tbody>
              { this.tabRow() }
              </tbody>
          </table>
       
      )
    }
}