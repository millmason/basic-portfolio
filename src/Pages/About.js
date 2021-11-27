import React from 'react';
import { Link } from 'react-router-dom'

const About = () => {
    
        return (
            <div className="content-block">
                <Link to="/" className="back button">{`< home `}</Link>
                <h2>About</h2>
                <p>I make websites.</p>
                <p>Currently, I'm really interested in shaders.</p>
            </div>
        )
    }



export default About;