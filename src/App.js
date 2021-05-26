import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserHome from './Containers/User';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path='/'
          render={({ match: { url } }) => (
            <>
              <Route exact path={`${url}/`} component={UserHome} />
            </>
          )}
        />
        {/* <Route
          path='/admin'
          render={({ match: { url } }) => (
            <>
              <Route exact path={`${url}/`} component={AdminHome} />
            </>
          )}
        /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
