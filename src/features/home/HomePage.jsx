import React from 'react';
import { Segment, Container, Image, Header, Button, Icon } from 'semantic-ui-react';

const HomePage = ({history}) => {
  return (
    <Segment textAlign='center' inverted vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image src='./assets/logo.png' />
          Re-vents
        </Header>
        <Button size='huge' inverted onClick={() => history.push('/events')}>
            Get started
            <Icon name='right arrow' inverted/>
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
