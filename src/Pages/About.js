import React from 'react';

const divStyle = {
    color:'blue'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <p>Read all about it</p>
            </div>
        )
    }
}



export default About;