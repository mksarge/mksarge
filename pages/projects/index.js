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
import Layout from '../../components/Layout';
import s from './index.css';
import { title, html } from './index.md';
import Link from '../../components/Link';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.editHtml = this.editHtml.bind(this);
    this.state = {
      newHtml: this.editHtml(html),
    };
  }

  componentDidMount() {
    document.title = title;
    // const asdf = ;
    // this.setState({ newHtml: asdf });
  }

  editHtml(input) {
    // console.log(input);
    const output1 = input.toString().replace(/a href/gi, '<Link to');
    const output2 = output1.toString().replace(/\/a/gi, '/Link');
    // console.log(output3);
    return output2;
  }

  render() {
    return (
      <Layout>
        <div className={s.projects} dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }

}

export default HomePage;
