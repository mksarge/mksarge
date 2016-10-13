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
import s from './Footer.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.bar} />
      <p>© Michael Sargent 2016.&nbsp;<a href="https://github.com/mksarge/mksarge">&#8594;</a></p>
    </footer>
  );
}

export default Footer;
