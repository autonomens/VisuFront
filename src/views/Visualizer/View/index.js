import React from 'react';
import { connectAuthProvider } from '@terralego/core/modules/Auth';
import { withTranslation } from 'react-i18next';

import { connectView } from './context';
import View from './View';
import ViewProvider from './Provider';

const ConnectedView = connectAuthProvider('authenticated')(connectView(
  'initLayersState',
  'setLayersTreeState',
  'layersTreeState',
  'query',
  'map',
  'setMap',
  'setMapState',
  'mapIsResizing',
  'searchQuery',
  'setVisibleBoundingBox',
  'visibleBoundingBox',
)(withTranslation()(View)));

export default props => (
  <ViewProvider {...props}>
    <ConnectedView {...props} />
  </ViewProvider>
);
