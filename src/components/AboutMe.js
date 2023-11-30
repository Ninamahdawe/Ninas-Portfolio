
import React from 'react';
import { aboutData } from '../data';
const AboutMe = () => {
    const { intro, bio, resume } = aboutData;

    return (
        <div>
            <h2>About Me</h2>
            <p>{intro}</p>
            <p dangerouslySetInnerHTML={{ __html: bio }} />
            <a href={resume} target="_blank" rel="noopener noreferrer">View my resume</a>
        </div>
    );
};

export default AboutMe;