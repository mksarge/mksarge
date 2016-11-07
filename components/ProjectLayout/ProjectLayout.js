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

class ProjectLayout extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    hero: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array.isRequired,
    html: React.PropTypes.string.isRequired,
  }

  componentDidMount() {
    document.title = `Michael Sargent \u{00b7} ${this.props.title}`;
  }

  renderTags() {
    const tags = [];
    for (let i = 0; i < this.props.tags.length; i++) {
      tags[i] = (<h5 key={i}>{this.props.tags[i]}</h5>);
    }
    return tags;
  }

  render() {
    return (
      <Layout>
        <div className={s.projectpage}>
          <img className={s.hero} alt="loading.." src={this.props.hero} />
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
          {this.renderTags()}
          <hr />
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </div>
      </Layout>
    );
  }
}

export default ProjectLayout;
