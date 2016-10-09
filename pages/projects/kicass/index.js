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
import Layout from '../../../components/Layout';
import s from '../projects.css';
import { title, html } from './index.md';
import pic from './classportal.jpg';

class ProjectsPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.page}>
        <br /><br />
        <img className={s.image} src={pic} alt=" " height="700" />
        <br /><br />
        <div className={s.markdown} dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }

}

export default ProjectsPage;
