import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiHackerrank } from "react-icons/si";
import { SiIndeed } from "react-icons/si";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/hibiotech"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" size={30}/>
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/eric-thomas-818a0a306/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <SiIndeed className="social-icon" size={30} />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:dr.eric1125@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" size={30}/>
        </a>
      </li>      
      <li className="social-icons">
        <a
          href="https://www.hackerrank.com/certificates/a18aabe3988d"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <SiHackerrank className="social-icon" size={30}/>
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
