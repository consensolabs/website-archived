import React from 'react';
import { footer } from './data';
import logo from './static/images/logo-without-text.png';

function antCloudFooter() {
  const children = footer.map((item, i) => (<div key={i}><a href={item.src}>{item.text}</a></div>));
  return (<div>
    <div className="logo" key="logo">
      <img src={logo} width="120" height="82" />
    </div>
    <div key="nav" className="home-footer-nav-wrapper">
      {children}
    </div>
  </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">Copyright ©{new Date().getFullYear()} Consenso Labs. </p>
      </div>
    </div>
  );
}

export default Footer;
