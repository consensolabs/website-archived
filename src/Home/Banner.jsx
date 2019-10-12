import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import BannerImage from './BannerImage';
import LabImage from './LabImage';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-banner',
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <LabImage />
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
              A BLOCKCHAIN RESEARCH LAB
            </h1>
            <p key="p">Dedicated blockchain research center to provide variety of services for students, software engineers and blockchain enthusiasts. We also try to adress critical issues through decentralization. Checkout our DLT based loan syndication platform "SyndLend"</p>
            <span key="button">
              <a href={'https://syndlend.consensolabs.com'} target={'blank'}>
              <Button
                style={{fontSize: 15}}
                type="primary"
                onClick={() => {

              }}
              >
                Checkout SyndLend
              </Button>
              </a>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage />

          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
