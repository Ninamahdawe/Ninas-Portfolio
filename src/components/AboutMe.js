
import React, { useState } from 'react';

const AboutMe = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <h2>About Me</h2>
            <button onClick={handleButtonClick}>Toggle Animation</button>
            <div className={`about-me-content ${isExpanded ? 'expanded' : ''}`}>
                <p>Welcome to my portfolio! I am a passionate software developer with experience in JavaScript and React.</p>
            </div>
        </div>
    );
};

export default AboutMe;
