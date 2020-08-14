/*global google*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Segment, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createEvent, updateEvent } from '../eventActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import { SelectInput } from './../../../app/common/form/SelectInput';
import { CategoryOptions } from './../../../app/api/CategoryOptions';
import DateInput from './../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: {
      address: '',
      latLng: null,
    },
    venue: {
      address: '',
      latLng: null,
    },
    date: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.object().shape({
      address: Yup.string().required('City is required'),
    }),
    venue: Yup.object().shape({
      address: Yup.string().required('Venue is required'),
    }),
    date: Yup.string().required(),
  });

  const handleFormSubmit = (values) => {
    if (selectedEvent) {
      dispatch(updateEvent({ ...selectedEvent, ...values }));
      history.push('/events');
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostedBy: 'Bob',
        attendees: [],
      };
      dispatch(createEvent(newEvent));
      history.push('/events');
    }
  };

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isValid, dirty, isSubmitting, values }) => (
          <Form className='ui form'>
            <Header sub color='teal' content='Event Details' />
            <TextInput name='title' placeholder='Event Title' />
            <SelectInput
              name='category'
              placeholder='Category'
              options={CategoryOptions}
            />
            <TextArea name='description' placeholder='Description' rows={3} />
            <Header sub color='teal' content='Event Location Details' />
            <PlaceInput name='city' placeholder='City' />
            <PlaceInput
              name='venue'
              placeholder='Venue'
              options={{
                location: new google.maps.LatLng(values.city.latLng),
                radius: 1000,
                types: ['establishment'],
              }}
            />
            <DateInput
              name='date'
              placeholderText='Event Date'
              timeFormat='HH:mm'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm a'
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              positive
              content='Submit'
              floated='right'
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to='/events'
              type='submit'
              content='Cancel'
              floated='right'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
