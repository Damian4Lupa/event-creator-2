import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import CreateEvent from '../pages/CreateEvent'
import Clock from '../pages/Clock'
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={CreateEvent} />
        <Route path="/clock" component={Clock} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;