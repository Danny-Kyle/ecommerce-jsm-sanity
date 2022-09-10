import React from "react";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillRedditCircle
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        &copy; Made by Okechukwu || With Create Next App, Sanity.io and Stripe,
        2022 Works
      </p>
      <p>All Rights Reserved</p>
      <p className="icons">
        <AiFillFacebook />
        <AiFillGithub />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillRedditCircle />
      </p>
    </div>
  );
};

export default Footer;
