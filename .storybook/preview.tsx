import React from 'react';
import theme from '../src/shared/theme';
import AppTheme from '../src/shared/AppTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        defaultViewport: 'Small mobile',
      },
    },
  },
};

/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <AppTheme theme={theme}>
    <Story />
  </AppTheme>
);

export const decorators = [withMuiTheme];
