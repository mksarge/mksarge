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
import Layout from '../../../components/Layout';
import s from '../projects.css';
import { title, html } from './index.md';

class Project extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div className={s.projectpage} dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }

}

export default Project;
