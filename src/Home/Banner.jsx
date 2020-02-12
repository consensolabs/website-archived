import React from 'react';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerImage from './static/images/decentralized.svg';
import BannerSVGAnim from './component/BannerSVGAnim';

function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img
              alt="banner"
              src={BannerImage}
              width="100%"
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">A DLT RESEARCH LAB</h1>
        <p key="content">
            Dedicated blockchain research lab to provide variety of services for students, software engineers and blockchain enthusiasts. We also try to address critical issues through decentralization. Checkout our DLT based loan syndication platform "SyndLend"
        </p>
        <div key="button" className="button-wrapper">
          <a href="https://syndlend.com/" target="_blank" rel="noopener noreferrer">
            <Button type="primary">
              SyndLend
            </Button>
          </a>
          <a href="https://gitfunded.consensolabs.com/" target="_blank" rel="noopener noreferrer">
            <Button style={{ margin: '0 16px' }} type="primary" ghost>
              GitFunded
          </Button>
          </a>

        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          {/*<BannerSVGAnim />*/}
        <img
            alt="banner"
            src={BannerImage}
            width="55%"
        />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
