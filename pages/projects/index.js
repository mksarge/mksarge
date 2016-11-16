/**
 * www.mksarge.com
 * https://github.com/mksarge/mksarge
 *
 * Copyright © 2016 Michael Sargent
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
    document.title = 'Michael Sargent | Projects';
  }

  render() {
    return (
      <Layout className={s.projects}>
        <h1>PROJECTS</h1>
        <hr />
        <h2>In Progress</h2>
        <h3><Link to="/projects/classportal">ClassPortal</Link></h3>
        <p>Course management system</p>
        <h3><Link to="/projects/finescrubbing">Fine Scrubbing</Link></h3>
        <p>iOS-style "fine scrubbing" for desktop video</p>
        <hr />
        <h2>Completed</h2>
        <h3><Link to="/projects/react-static-template">React Static Template</Link></h3>
        <p>Single-page React + Webpack boilerplate</p>
        <h3><Link to="/projects/kicass">KiCASS</Link></h3>
        <p>Kinect-Controlled Artistic Sensing System</p>
      </Layout>
    );
  }

}

export default HomePage;
