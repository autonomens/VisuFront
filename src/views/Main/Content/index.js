import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import withEnv from '../../../config/withEnv';
import Loading from '../../../components/Loading';
import AppName from '../AppName';
import VisualizerLoading from '../../Visualizer/Loading';

const Profile = lazy(() => import('../../Profile'));
const Error404 = lazy(() => import('../../Error404'));
const Visualizer = lazy(() => import('../../Visualizer'));

const Content = ({ env: { VIEW_ROOT_PATH = 'view', DEFAULT_VIEWNAME = 'rechercher' } }) => (
  <div className="main__content">
    <Switch>
      <Route path="/create-account/:id/:token">
        <Suspense fallback={<Loading />}>
          <Profile />
        </Suspense>
      </Route>
      <Route path={`/${VIEW_ROOT_PATH}/not-found`}>
        <p>Vue non trouvée :(</p>
      </Route>
      <Route path={`/${VIEW_ROOT_PATH}/:viewName`}>
        <Suspense fallback={<VisualizerLoading />}>
          <Visualizer
            renderHeader={<AppName />}
          />
        </Suspense>
      </Route>
      <Route path="/">
        <Redirect to={`/${VIEW_ROOT_PATH}/${DEFAULT_VIEWNAME}`} />
      </Route>
      <Route render={() => (
        <Suspense fallback={<VisualizerLoading />}>
          <Error404 />
        </Suspense>
      )}
      />
    </Switch>
  </div>
);

export default withEnv(Content);
