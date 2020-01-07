import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Team from './Team';
import Footer from './Footer';
import './static/style';
import './less/antMotionStyle.less';

import {
    TeamDataSource,
} from './data';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isMobile,
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  render() {
    return (
      <DocumentTitle title="Consenso Labs - A blockchain research lab">
        <div>
          <Header isMobile={this.state.isMobile} />
          <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} />
            <Page1 isMobile={this.state.isMobile} />
            {/*<Page2 />*/}
            <Team
                  id="Content8_0"
                  key="Content8_0"
                  dataSource={TeamDataSource}
            />
            {/*<Page3 isMobile={this.state.isMobile} />*/}
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
