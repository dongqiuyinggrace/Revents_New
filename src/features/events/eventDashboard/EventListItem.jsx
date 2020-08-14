import React from 'react';
import { useDispatch } from 'react-redux';
import { Segment, Item, List, Icon, Button } from 'semantic-ui-react';
import EventAttendee from './EventAttendee';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../eventActions';
import { format } from 'date-fns';


const EventListItem = ({ event}) => {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment attached='top'>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL || '/assets/user.png'}  />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>Hosted By {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {format(event.date, 'MMMM d, yyyy h:mm a')} |
          <Icon name='marker' /> {event.venue.address}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees && event.attendees.map((attendee) => (
            <EventAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button as={Link} to={`/events/${event.id}`} color='teal' content='View' floated='right' />
        <Button color='red' content='Delete' floated='right' onClick={() => dispatch(deleteEvent(event.id))}/>
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
