import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const PrivateRoute = () => {
  const userPermissions = ['private-one', 'private-two'];

  console.log(userPermissions.includes('private-one'));

  return (
    <>
      <Switch>
        {/* !COMPONENT ATTRIBUTE SHOULD RECEIVE A COMPONENT! e.g. component={<PrivateHome />} */}
        <Route path="/private-home" component={() => 'private-home'} />
        {userPermissions.includes('private-one') && (
          <Route path="/private-one" component={() => 'private-one'} />
        )}
        {userPermissions.includes('private-two') && (
          <Route path="/private-two" component={() => 'private-two'} />
        )}
        {userPermissions.includes('private-three') && (
          <Route path="/private-three" component={() => 'private-three'} />
        )}
        <Redirect to="/private-home" />
      </Switch>
    </>
  );
};
