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
import ProjectLayout from '../../../components/ProjectLayout';
import md from './index.md';

const ProjectPage = () => (
  <ProjectLayout
    title={md.title}
    subtitle={md.subtitle}
    hero={md.hero}
    tags={md.tags}
    html={md.html}
  />
);

export default ProjectPage;
