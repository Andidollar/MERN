import React, { Component } from 'react';
import Axios from 'axios';
import Table from './Table';
import {connect} from "react-redux";

class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {all: [],
      itineraries: [],
    comments: []};
    }

    componentDidMount(){
      // console.log('this.props.itineraries', this.props.itineraries)
      Axios.get('http://localhost:5000/comments/all')
        .then(res => {
          
          // console.log('response.data', res.data)
          // const allComments = res.data;
          const comments = res.data.filter((comment) => comment.itineraryId === this.props.itineraryId)
        console.log('comments', comments)
        this.setState({comments: comments})
        //  this.setState({ all: res.data });
          // console.log('this.props.itinerariesA', itineraries)
        })
        .catch(function (error) {
          console.log(error);
        })
      
    }
    tabRow(){
      // console.log('this.props.itineraries', this.props.itineraries)
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
              {this.state.comments.map((comment, index) => {return (
              
                  <Table  key={index} comment={comment}></Table>
              
              )})}
              </tbody>
          </table>
       
      )
    }
}

const mapStateToProps = state => {
  console.log("CommentsIndexRedux", state)
  return {login: state.login};
};

export default connect(mapStateToProps)(Index);