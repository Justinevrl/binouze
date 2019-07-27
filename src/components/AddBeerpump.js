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

    // Exemple avec une requête POST :
    // Si l'API renvoie l'objet inséré, je mettrai le POST dans la méthode addBeerpump de App.js
    // axios.post(`https://binouzecorp.com/api/beerpumps`, { outflow, type })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
    // }
  }

  render() {
    const { newType } = this.state;
    return (
      <div>
        <Form className="addbeerpump" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input type="text" placeholder="add a beer pump" value={newType} onChange={this.handleChange} />
          </FormGroup>
          <Button className="addbutton" color="primary" type="submit">
            add
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddBeerpump;
