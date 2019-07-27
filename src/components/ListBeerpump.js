import React from 'react';
import {
  Button, Input, Form, FormGroup,
} from 'reactstrap';
import beerpump from '../assets/beerpump.jpeg';

const ListBeerpump = ({
  type, outflow, addOutflow, changeOutflow, removeOutflow,
}) => (
  <div>
    <img className="imagebeerpump" src={beerpump} alt="beerpump" />
    <p className="type">{type}</p>
    <div className="beerpump">
      <Button color="primary" onClick={() => removeOutflow(type)}>-</Button>
      <Form className="pump">
        <FormGroup>
          <Input type="text" value={outflow} onChange={event => changeOutflow(type, event.target.value)} />
        </FormGroup>
      </Form>
      <Button color="primary" onClick={() => addOutflow(type)}>+</Button>
    </div>
  </div>
);

export default ListBeerpump;
