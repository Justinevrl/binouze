import React from 'react';
import {
  Button, Input, Form, FormGroup,
} from 'reactstrap';
import beerpump from '../assets/beerpump.jpeg';

const ListBeerpump = ({
  type, outflow, addOutflow, changeOutflow, removeOutflow,
}) => (
  <div>
    <img src={beerpump} alt="beerpump" />
    <p>{type}</p>
    <Button color="primary" onClick={() => removeOutflow(type)}>-</Button>
    <Form>
      <FormGroup>
        <Input type="text" value={outflow} onChange={event => changeOutflow(type, event.target.value)} />
      </FormGroup>
    </Form>
    <Button color="primary" onClick={() => addOutflow(type)}>+</Button>
  </div>
);

export default ListBeerpump;
