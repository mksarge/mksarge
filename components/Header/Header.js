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

/*

.bar1:hover, .bar2:hover, .bar3:hover, .bar4:hover {
  background-color: #4c566a;
}

*/
