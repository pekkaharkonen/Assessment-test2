import React, { Component } from 'react';
import { getSingleScooter } from '../services/apiservice';

export default class ScooterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoot: {},
      rend: false
    };
  }
  async componentDidMount() {
    let response = await getSingleScooter(this.props.match.params.id);
    this.setState({ scoot: response, rend: true });
  }

  render() {
    if (this.state.rend) {
      return (
        <div>
          <h1>Tarkemmat tiedot skuutista</h1>
          <p>{`Malli: ${this.state.scoot.model.name}, ID: ${this.state.scoot.id}`}</p>
          <p>{`Sijainti: lat: ${this.state.scoot.position.lat}, lon: ${this.state.scoot.position.lon}`}</p>
          <p>{`Maksimienergia: ${this.state.scoot.electricity.max}, nykyinen: ${this.state.scoot.electricity.current}`}</p>
          <p>{`Otettu käyttöön: ${this.state.scoot.added}`}</p>
        </div>
      );
    } else {
      return <h1>Ladataan tietoja...</h1>;
    }
  }
}
