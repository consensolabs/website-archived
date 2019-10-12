import React from 'react';
import { Button } from 'antd';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            Consenso Labs
          </a>

        </h1>
          <div className="button">
              <a href={'https://syndlend.consensolabs.com'} target={'blank'}><Button>Our Work</Button></a>
          </div>
      </div>

    </header>
  );
}
