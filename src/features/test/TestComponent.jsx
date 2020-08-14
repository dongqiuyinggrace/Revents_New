import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from './../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

const TestComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const [latLng, setLatLng] = useState(null);

  return (
    <>
      <h1>The data is {data}</h1>
      <Button
        color='red'
        content='Increment'
        onClick={() => dispatch(increment(10))}
      />
      <Button
        color='green'
        content='Decrement'
        onClick={() => dispatch(decrement(5))}
      />
      <Button
        color='teal'
        content='OpenModal'
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
      <div style={{marginTop: 15}}>
        <TestPlaceInput setLatLng={setLatLng}/>
      </div>
      <TestMap latLng={latLng}/>
    </>
  );
};

export default TestComponent;
