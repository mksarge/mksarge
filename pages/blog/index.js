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
    document.title = 'Michael Sargent | Blog';
  }

  render() {
    return (
      <Layout className={s.blog}>
        <h1>BLOG</h1>
        <hr />
        <h2>October 2016</h2>
        <h3><Link to="/blog/0">Building ClassPortal</Link></h3>
        <h3><Link to="/blog/1">React Static Boilerplate</Link></h3>
        <h3><Link to="/blog/2">REST Authentication</Link></h3>
      </Layout>
    );
  }

}

export default HomePage;

// <div className={s.blog} dangerouslySetInnerHTML={{ __html: html }} />
