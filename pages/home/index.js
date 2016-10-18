/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import s from './index.css';
import Link from '../../components/Link';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'Michael Sargent | Home';
  }

  render() {
    return (
      <Layout className={s.home}>
        <img src="./profile.png" alt=" " height="200" />
        <h1>Michael Sargent</h1>
        <p>
          I'm Michael, a computer engineering undergrad at the University of British Columbia.
          <br />
          <a href="https://github.com/mksarge" target="_blank" >Github</a>
          &nbsp;|&nbsp;
          <a href="mailto:michaelksarge@gmail.com">Email</a>
        </p>
        <hr />
        <h2><Link to="/blog">BLOG</Link></h2>
        <h3><Link to="/blog/0">Building ClassPortal</Link></h3>
        <h3><Link to="/blog/1">React Static Boilerplate</Link></h3>
        <h3><Link to="/blog/2">REST Authentication</Link></h3>
        <hr />
        <h2><Link to="/projects">PROJECTS</Link></h2>
        <h3><Link to="/projects/classportal">UBC ClassPortal</Link></h3>
        <h3><Link to="/projects/finescrubbing">Fine Scrubbing</Link></h3>
        <h3><Link to="/projects/kicass">KiCASS</Link></h3>
      </Layout>
    );
  }

}

export default HomePage;

// <div className={s.home} dangerouslySetInnerHTML={{ __html: html }} />
