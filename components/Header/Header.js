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
import s from './Header.css';
import Link from '../Link';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.bar1} >
        <p><Link to="/">Home</Link></p>
      </div>
      <div className={s.bar2} >
        <p><Link to="/blog">Blog</Link></p>
      </div>
      <div className={s.bar3} >
        <p><Link to="/projects">Projects</Link></p>
      </div>
      <div className={s.bar4} >
        <p><Link to="/about">About</Link></p>
      </div>
    </header>
  );
}

export default Header;
