/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const fm = require('front-matter');
const anchor = require('markdown-it-anchor');
const toc = require('markdown-it-table-of-contents');

module.exports = function markdownLoader(source) {
  this.cacheable();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) { console.error(err.stack); } // eslint-disable-line no-console
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { console.error(err.stack); } // eslint-disable-line no-console

      return '';
    },
  });

  md.use(anchor);
  md.use(toc, { includeLevel: [1, 2, 3] });

  // add target="_blank" to all links
  const defaultRender = md.renderer.rules.link_open ||
    function renderIt(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  // add target="_blank" to all links
  md.renderer.rules.link_open = function changeRenderRules(tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    const aIndex = tokens[idx].attrIndex('target');

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']); // add new attribute
    } else {
      // replace value of existing attr //
      tokens[idx].attrs[aIndex][1] = '_blank'; // eslint-disable-line no-param-reassign
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };

  const frontmatter = fm(source);
  frontmatter.attributes.html = md.render(frontmatter.body);

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`;
};
