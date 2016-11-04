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
import * as md from './index.md';

class Project extends React.Component {

  componentDidMount() {
    document.title = `Michael Sargent \u{00b7} ${md.title}`;
  }

  renderTags() {
    const tags = [];
    for (let i = 0; i < md.tags.length; i++) {
      tags[i] = (<h5 key={i}>{md.tags[i]}</h5>);
    }
    return tags;
  }

  render() {
    return (
      <Layout>
        <div className={s.projectpage}>
          <img className={s.hero} src={md.hero} />
          <h1>{md.title}</h1>
          <h2>{md.subtitle}</h2>
          {this.renderTags()}
          <hr />
          <div dangerouslySetInnerHTML={{ __html: md.html }} />
        </div>
      </Layout>
    );
  }

}

export default Project;
