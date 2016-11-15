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
import Footer from '../Footer';
import Header from '../Header';
import s from './Layout.css';

const Layout = props => (
  <div className={s.container} >
    <div className={s.content}>
      <Header />
      <br />
      <div {...props} />
    </div>
    <Footer />
  </div>
);

export default Layout;
