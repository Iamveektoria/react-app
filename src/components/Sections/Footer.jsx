import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div>
          <img src="/facebook_icon.png" />
        </div>
        <div>
          <img src="/instagram_icon.png" />
        </div>
        <div>
          <img src="/twitter_icon.png" />
        </div>
        <div>
          <img src="/youtube_icon.png" />
        </div>
      </div>
      <div className="footerMiddle">
        <div>Conditions of Use</div>
        <div>Privacy & Policy</div>
        <div>Press Room</div>
      </div>
      <div className="footerDown">© 2021 MovieBox by Adriana Eka Prayudha</div>
    </footer>
  );
};

export default Footer;
