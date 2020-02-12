import React, {Component} from 'react';
import '../index.css';
import logo from '../media/MYtineraryLogo.png';
import arrow from '../media/circled-right-2.png';
import Footer from './Footer';
import Header from './Header';
import { Link } from "react-router-dom";
// import home from '../media/homeIcon.png';
// import 'bootstrap/dist/css/bootstrap.min.css'; import
// 'bootstrap/dist/js/bootstrap.bundle.min'; const Landing = () => { return
// (<div><h2>Landing is the best</h2></div>) };

export class Landing extends Component {
    render() {
        return (
            <div>
             <Header></Header>
                <img
                    className="logo"
                    src={logo}
                    alt="logo"
                    style={{
                    width: 200,
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 10
                }}/>
                <p
                    style={{
                    textAlign: 'center',
                    marginTop: 50,
                    marginLeft: 30,
                    marginRight: 30
                }}>Find your perfect trip, designed by insiders who know and love their cities</p>
                <h2 style={{
                    textAlign: 'center'
                }}>Start browsing</h2>
                <Link to="/login">
                <img
                    className="firstLink"
                    src={arrow}
                    alt="arrow"
                    style={{
                    width: 150,
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 10,
                    marginBottom: 10
                }}/></Link>
                <p
                    style={{
                    textAlign: 'center',
                    marginTop: 50,
                    marginLeft: 30,
                    marginRight: 30
                }}>Want to build your own MYtinerary?</p>
                <Footer></Footer>
            </div>
        )
    }
}

export default Landing
