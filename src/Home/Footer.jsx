import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>SyndLend</h2>
              <div>
                <a target="_blank " href="https://docs.syndlend.consensolabs.com/">
                  SyndLend Docs
                </a>
              </div>
              <div>
                <a target="_blank " href="https://github.com/consensolabs">
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://syndlend.consensolabs.com/syndlend-whitepaper-v1.pdf">White paper</a>
              </div>

            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>GitFunded</h2>
              <div>
                <a href="https://gitfunded.consensolabs.com/docs/overview">GitFunded Docs</a>

              </div>
                <div>
                    <a target="_blank " href="https://github.com/gitfunded">
                        GitHub
                    </a>
                </div>

            </div>
          </Col>
          {/*<Col lg={6} sm={24} xs={24}>*/}
            {/*<div className="footer-center">*/}
              {/*<h2>社区</h2>*/}
              {/*<div>*/}
                {/*<a href="#">*/}
                  {/*更新记录*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<a href="#">*/}
                  {/*常见问题*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<a target="_blank" rel="noopener" href="https://gitter.im/ant-design/ant-design-pro">*/}
                  {/*在线讨论*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<a target="_blank" rel="noopener" href="https://github.com/ant-design/ant-design-pro/issues">*/}
                  {/*讨论列表*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<a*/}
                  {/*target="_blank"*/}
                  {/*rel="noopener"*/}
                  {/*href="http://ant.design/docs/resource/work-with-us"*/}
                {/*>*/}
                  {/*加入我们*/}
                {/*</a>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</Col>*/}
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                Reach us
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="mailto:info@consensolabs.com">Email</a>
                <span> - </span>
                <span>info@consensolabs.com</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://twitter.com/consensolabs">Twitter</a>
                <span> - </span>
                <span>consensolabs</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/consensolabs">GitHub</a>
                <span> - </span>
                <span>consensolabs</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            <Button ghost size="small" >
              English
            </Button>
          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="mailto:info@consensolabs.com"
              rel="noopener noreferrer"
              target="_blank"
            >
             info@consensolabs.com
            </a>
          </span>
          <span style={{ marginRight: 12 }}>Copyright © Consenso Labs</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
