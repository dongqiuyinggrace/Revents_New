import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';


const EventDashboard = () => {
  const events = useSelector(state => state.event.events)

  return (
    <Grid>
      <Grid.Column width={8}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={4}>
        <h1>Event sidebar</h1>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
