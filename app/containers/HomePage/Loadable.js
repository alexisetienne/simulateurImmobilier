/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'loadable-components';

import Server from './Server';

export default loadable(() => import('./Browser'), {
  // eslint-disable-next-line react/prop-types
  render: ({ Component, loading, ownProps }) => {
    if (loading) return <Server preloading {...ownProps} />;
    return <Component {...ownProps} />;
  },
});
