/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: [
    {
      key: 'docusaurus', // Error: Unknown sidebar item keys: key.
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1', 'doc2', 'doc3'],
    },
    {
      type: 'category',
      label: 'Features',
      items: ['mdx'],
    }
  ],
};
