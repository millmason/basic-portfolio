import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Lines } from '../components/Lines'

class Home extends React.Component {
    render() {
        return (
            <div className="home-wrapper">
                <Lines />
                <div className="title-block">
                    <p>Hi, I'm Mill</p>
                    <Link to="/projects">projects</Link>
                    <Link to="/about">about</Link>
                </div>
            </div>
        );
    }

}

export default Home;