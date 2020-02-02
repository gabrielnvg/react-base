import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { theme } from './../src/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

addParameters({
  options: {
    showRoots: false,
    storySort: sortEachDepth([
      ['Home', 'General', 'Form', '...'], // 1. level - ordered like this rest default order
      ['...'], // 2. level - Intro first, System last in between default order
      ['...'], // 3. level - Intro first rest default order
    ]),
  },
});

addDecorator(storyFn => (
  <div style={{ padding: '10px 0', textAlign: 'center' }}>{storyFn()}</div>
));

addDecorator(storyFn => (
  <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
));

function sortEachDepth(orderPerDepth) {
  return (a, b) => {
    // If the two stories have the same story kind, then use the default
    // ordering, which is the order they are defined in the story file.
    if (a[1].kind === b[1].kind) {
      return 0;
    }

    const storyKindA = a[1].kind.split('/');
    const storyKindB = b[1].kind.split('/');
    let depth = 0;
    let nameA, nameB, indexA, indexB;
    let ordering = orderPerDepth[0] || [];

    while (true) {
      nameA = storyKindA[depth] ? storyKindA[depth] : '';
      nameB = storyKindB[depth] ? storyKindB[depth] : '';

      if (nameA === nameB) {
        // We'll need to look at the next part of the name.
        depth++;
        ordering = orderPerDepth[depth] || [];
        continue;
      } else {
        // Look for the names in the given `ordering` array.
        indexA = ordering.indexOf(nameA);
        indexB = ordering.indexOf(nameB);

        // If at least one of the names is found, sort by the `ordering` array.
        if (indexA !== -1 || indexB !== -1) {
          // If one of the names is not found in `ordering`, list it at the place of '...' or last.
          if (indexA === -1) {
            indexA = ordering.indexOf('...') || ordering.length;
          }

          if (indexB === -1) {
            indexB = ordering.indexOf('...') || ordering.length;
          }

          return indexA - indexB;
        }
      }

      // Otherwise, use alphabetical order.
      return nameA.localeCompare(nameB);
    }
  };
}
