import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PublicHome } from 'src/features/publicHome/PublicHome';

export const PublicRoute = () => {
  return (
    <>
      <Switch>
        {/* !COMPONENT ATTRIBUTE SHOULD RECEIVE A COMPONENT! e.g. component={PublicHome} */}
        <Route path="/public-home" component={PublicHome} />
        <Route path="/public-one" component={() => 'public-one'} />
        <Route path="/public-two" component={() => 'public-two'} />
        <Route path="/public-three" component={() => 'public-three'} />

        <Redirect to="/public-home" />
      </Switch>
    </>
  );
};
