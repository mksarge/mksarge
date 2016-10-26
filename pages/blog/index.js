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

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'Michael Sargent | Blog';
  }

  render() {
    return (
      <Layout className={s.blog}>
        <h1>BLOG</h1>
        <hr />
        <h2>November 2016</h2>
        <p>Under construction!</p>
      </Layout>
    );
  }

}

export default HomePage;
