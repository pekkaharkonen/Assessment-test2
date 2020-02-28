import React, { Component } from 'react';
import { Scooter } from './Scooter';
import { Table } from 'react-bootstrap';
import { getAllScooters } from '../services/apiservice';

export default class ScooterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scooters: []
    };
  }

  async componentDidMount() {
    let data = await getAllScooters();
    this.setState({ scooters: data });
  }

  render() {
    /* TODO: Poista dummydata alta, ja korvaa se hakemalla
    varsinaiset tiedot palvelimelta. Muista tehdä 
    haku services/apiservices.js moduulissa ja sen
    getAllScooters() funktiossa. Tähän komponenttiin vain 
    kyseisen funktion kutsu */

    const scoots = this.state.scooters.map(s => (
      <Scooter key={s.id} scooter={s} {...this.props} />
    ));
    // </clip>
    return (
      <div>
        <h1>Available scooters</h1>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Model</th>
              <th>Power</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>{scoots}</tbody>
        </Table>
      </div>
    );
  }
}
