import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ListBeerpump from './components/ListBeerpump';
import AddBeerpump from './components/AddBeerpump';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          outflow: 0,
          type: 'Blanche',
        },
        {
          outflow: 0,
          type: 'Blonde',
        },
        {
          outflow: 0,
          type: 'Ambrée',
        },
      ],
    };
  }

  // Exemple avec une requête GET :
  // componentDidMount = () => {
  //   axios.get('http://www.binouzecorp.com/api/beerpumps')
  //     .then((res) => {
  //       const beers = res.data;
  //       this.setState({ beers });
  //     });
  // }

  addOutflow = (type) => {
    const { beers } = this.state;
    const newBeer = beers.find(beer => beer.type === type);
    const index = beers.indexOf(newBeer);
    const newBeers = beers;
    newBeer.outflow += 1;
    newBeers[index] = newBeer;
    this.setState({
      beers: newBeers,
    });
  }

  changeOutflow = (type, value) => {
    const { beers } = this.state;
    const newBeer = beers.find(beer => beer.type === type);
    const index = beers.indexOf(newBeer);
    const newBeers = beers;
    newBeer.outflow = parseInt(value, 10) || 0;
    newBeers[index] = newBeer;
    this.setState({
      beers: newBeers,
    });
  }

  removeOutflow = (type) => {
    const { beers } = this.state;
    const newBeer = beers.find(beer => beer.type === type);
    if (newBeer.outflow > 0) {
      const index = beers.indexOf(newBeer);
      const newBeers = beers;
      newBeer.outflow -= 1;
      newBeers[index] = newBeer;
      this.setState({
        beers: newBeers,
      });
    }
  }

  addBeerpump = (beer) => {
    const { beers } = this.state;
    this.setState({
      beers: [...beers, beer],
    });
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <Container className="container">
          <Row>
            <Col>
              <h1 className="title">Binouze Corporation</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddBeerpump addBeerpump={this.addBeerpump} />
            </Col>
          </Row>
          <Row>
            {beers.map(beer => (
              <Col xs="12" sm="4">
                <ListBeerpump
                  addOutflow={this.addOutflow}
                  changeOutflow={this.changeOutflow}
                  removeOutflow={this.removeOutflow}
                  type={beer.type}
                  outflow={beer.outflow}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
