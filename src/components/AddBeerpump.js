import React, { Component } from 'react';
import {
  Button, Input, Form, FormGroup,
} from 'reactstrap';

class AddBeerpump extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newType: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      newType: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const { newType } = this.state;
    const { addBeerpump } = this.props;
    event.preventDefault();
    addBeerpump({ outflow: 0, type: newType });
    this.setState({
      newType: '',
    });
  }

  render() {
    const { newType } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input type="text" placeholder="add a beer" value={newType} onChange={this.handleChange} />
          </FormGroup>
          <Button color="primary" type="submit">
            add
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddBeerpump;
