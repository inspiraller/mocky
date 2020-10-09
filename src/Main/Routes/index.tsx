import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Route1 from './Route1';
import Route2 from './Route2';

export type TRoutes = {
  [key: string]: {
    title?: string;
    path: string;
    component: FC;
  };
};

type TAllRoutes = { routes: TRoutes };

export const AllRoutes: FC<TAllRoutes> = ({ routes }) => (
  <Switch>
    {Object.keys(routes).map((key: string) => (
      <Route path={routes[key].path} exact component={routes[key].component} key={`route-${key}`} />
    ))}
  </Switch>
);

export default AllRoutes;

export const routes: TRoutes = {
  route1: {
    title: 'Route 1',
    path: `/`,
    component: Route1
  },
  route2: {
    title: 'Route 2',
    path: `/Route2`,
    component: Route2
  }
};
