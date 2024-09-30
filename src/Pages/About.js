import React from 'react';
import { Link } from 'react-router-dom'

const About = () => {
    
        return (
            <div className="content-block">
                <Link to="/" className="back button">{`< home `}</Link>
                <h2>About</h2>
                <p>My name is <span className="text-highlight">Mill Mason</span>. I'm a developer and artist based in Brooklyn. I like to make things that add color and remove complexity.</p>
                <p>I work on the full stack with a focus on JavaScript and React.</p>
                <p>In my free time, I especially like to learn about shaders, SVGs, and accessibility.</p>
                <p>You can take a look at some of my code projects <Link className="link" to="/projects">here</Link>, or check out what I've been up to on <a className="link" href="https://glitch.com/@househaunt">Glitch</a> or <a className="link" href="www.github.com/millsoper">Github</a>.</p>
            </div>
        )
    }



export default About;
