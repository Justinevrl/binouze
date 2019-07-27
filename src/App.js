import React, { Component } from 'react';
import './App.css';
import ListBeerpump from './components/ListBeerpump';
import AddBeerpump from './components/AddBeerpump';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          outflow: 0,
          type: 'blanche',
        },
        {
          outflow: 0,
          type: 'blonde',
        },
        {
          outflow: 0,
          type: 'ambrée',
        },
      ],
    };
  }

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
        <AddBeerpump addBeerpump={this.addBeerpump} />
        {beers.map(beer => (
          <ListBeerpump
            addOutflow={this.addOutflow}
            changeOutflow={this.changeOutflow}
            removeOutflow={this.removeOutflow}
            type={beer.type}
            outflow={beer.outflow}
          />
        ))}
      </div>
    );
  }
}

export default App;
