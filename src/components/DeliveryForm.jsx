import React, { Component } from 'react';
import {
  Button,
  Row,
  Input,
  Icon
} from 'react-materialize';
import MaxApi from '../utils/MaxApi';

/**
 * @description DeliveryForm component
 * @class
 */
class DeliveryForm extends Component {
  /**
   * Creates an instance of DeliveryForm.
   * @memberof DeliveryForm
   */
  constructor() {
    super();
    this.state = {
      pickupLatLng: {},
      deliveryLatLng: {},
      estimatedDeliveryFee: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getEstimateDeliveryFee = this.getEstimateDeliveryFee.bind(this);
  }

  /**
   * @description Grabs the coordinates for
   *              origin and destination inputed
   * @param {object} event
   * @returns {void}
   * @memberof DeliveryForm
   */
  handleInputChange(event) {
    this.getCoordinates(event.target);
  }

  getCoordinates(element) {
    const inputNodes = document.getElementById(element.id);
    const autoComplete = new window.google.maps.places.Autocomplete(inputNodes);

    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      const { location } = place.geometry;

      this.setState({
        [`${element.id}LatLng`]: {
          place_id: place.place_id,
          location: location.toString(),
          address: place.formatted_address,
          lat: location.lat(),
          lng: location.lng()
        }
      });
    });
  }

  /**
   * @description API call to get estimated delivery fee
   *              and set the result in component's state
   * @returns {void}
   * @memberof DeliveryForm
   */
  getEstimateDeliveryFee() {
    MaxApi.getPriceEstimate(
      this.state.pickupLatLng,
      this.state.deliveryLatLng
    ).then((estimatedDeliveryFee) => {
      this.setState({
        estimatedDeliveryFee
      });
    });
  }

  render() {
    return (
      <div >
        <div>
          <p>Delivery Fee Estimate: N{this.state.estimatedDeliveryFee}</p>
        </div>
        <div>
          <Row >
            <Input
              s={6}
              id="pickup"
              placeholder="Enter pickup location"
              label="Pickup Location"
              onChange={this.handleInputChange}
              validate>
              <Icon>my_location</Icon>
            </Input>
            <Input
              s={6}
              id="delivery"
              placeholder="Enter delivery location"
              label="Delivery Location"
              onChange={this.handleInputChange}
              validate>
              <Icon>location_on</Icon>
            </Input>
          </Row>
        </div>
        <div>
          <Button
            className="yellow"
            waves="light"
            onClick={this.getEstimateDeliveryFee}
          >
            Get Delivery Price Estimate
          </Button>
        </div>
      </div>
    );
  }
}

export default DeliveryForm;
