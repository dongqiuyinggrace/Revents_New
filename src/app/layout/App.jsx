import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import HomePage from './../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import TestComponent from '../../features/test/TestComponent';
import { ModalManager } from '../common/modals/ModalManager';

function App() {
  const {key} = useLocation();
  return (
    <>
      <ModalManager />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Switch>
                <Route exact path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route
                  path={['/createEvent', '/manage/:id']}
                  component={EventForm}
                  key={key}
                />
                <Route path='/test' component={TestComponent} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
