import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import RouteForm from './RouteForm';

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

export const configRoutes: TRoutes = {
  routeForm: {
    title: 'New Event',
    path: `/`,
    component: RouteForm
  }
};
