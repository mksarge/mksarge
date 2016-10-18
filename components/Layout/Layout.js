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
import Footer from '../Footer';
import Header from '../Header';
import s from './Layout.css';

class Layout extends React.Component {

  render() {
    return (
      <div className={s.container} >
        <div className={s.content}>
          <Header />
          <br />
          <div {...this.props} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
