import React from 'react';
import { Segment, Image, Button, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const eventImageStyle = {
    filter: 'brightness(30%)'
}

const eventImageTextStyle = {
    position: 'absolute',
    left: '5%',
    bottom: '5%',
    color: 'white',
    width: '100%',
    height: 'auto'
}


const EventDetailedHeader = ({event}) => {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: 0 }} >
        <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid style={eventImageStyle}/>
        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header
                  size='huge'
                  content={event.title}
                  style={{ color: 'white' }}
                />
                <p>{format(event.date, 'MMMM d, yyyy h:mm a')}</p>
                <p>Hosted by <strong>{event.hostedBy}</strong></p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached='bottom'>
        <Button color='grey' content='Cancel My Place' />
        <Button color='teal' content='JOIN THIS EVENT' />
        <Button as={Link} to={`/manage/${event.id}`}  color='orange' content='Manage Event' floated='right' />
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
