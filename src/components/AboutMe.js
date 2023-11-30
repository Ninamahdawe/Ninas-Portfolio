
import React, { useState } from 'react';

const AboutMe = () => {
    const [aboutText, setAboutText] = useState("");
    const [bio, setBio] = useState("");

    seEffect(() => {
        setAboutText(
            "Hi, I'm Nina From California. I'm a full stack Software Engineer. I enjoy learning and developing new skills."
        );
        setBio(`Passionate in collaborating with cross-functional teams to design develop,
            and deploy high-quality web applications using both front-end and
            back-end development technologies, eager to apply academic knowledge
            and hands-on skills to contribute to my next role.<br /><br />
            Continuous learner, collaborative communicator, dedicated problem
            solver and creative thinker`);
    }, []);
    return (
        <div>
            <h2>About Me</h2>
            <div>
                <p dangerouslySetInnerHTML={{ __html: aboutText }} />
                <p dangerouslySetInnerHTML={{ __html: bio }} />
            </div>
        </div>
    );
};

export default AboutMe;