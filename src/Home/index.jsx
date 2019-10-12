import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Team from './Team';
import Footer from './Footer';
import './static/style';
import './less/antMotionStyle.less';

import {
    TeamDataSource,
} from './data';


class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Header key="header" />
        <Banner key="banner" />
        <Page1 key="page1" />
        <Page2 key="page2" />
        <Page3 key="page3" />

        <Page4 key="page4" />
          <Team
              id="Content8_0"
              key="Content8_0"
              dataSource={TeamDataSource}
          />
        <Footer key="footer" />
        <DocumentTitle title="Consenso Labs - A blockchain research lab" />
      </div>
    );
  }
}
export default Home;
