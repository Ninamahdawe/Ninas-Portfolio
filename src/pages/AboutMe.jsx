import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const AboutMe = () => {
  const [aboutText, setAboutText] = useState("");
  const [bio, setBio] = useState("");
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    setShowAboutMe(true);
  }, []);

  const aboutMeAnimation = useSpring({
    opacity: showAboutMe ? 1 : 0,
    transform: showAboutMe ? "translateY(0)" : "translateY(20px)",
  });

  const bioAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div>
      <h1>About Me</h1>
      <animated.p style={aboutMeAnimation}>{aboutText}</animated.p>
      <h2>Bio</h2>
      <animated.p style={bioAnimation}>{bio}</animated.p>
    </div>
  );
};

export default AboutMe;
