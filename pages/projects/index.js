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
import { title, html } from './index.md';
import Link from '../../components/Link';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.projects}>
        <br />
        <h1>PROJECTS</h1>
        <hr />
        <h2>In-Progress</h2>
        <h3><Link to="/projects/classportal">UBC ClassPortal</Link>
          &nbsp;-&nbsp;Course management system
        </h3>
        <h3><Link to="/projects/finescrubbing">Fine Scrubbing</Link>
          &nbsp;-&nbsp;iOS-style "fine scrubbing" for desktop video
        </h3>
        <hr />
        <h2>Completed</h2>
        <h3>
          <Link to="/projects/kicass">KiCASS</Link>
          &nbsp;-&nbsp;Kinect-Controlled Artistic Sensing System
        </h3>
      </Layout>
    );
  }

}

export default HomePage;

// <div className={s.projects} dangerouslySetInnerHTML={{ __html: html }} />
