import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import MaxApi from '../utils/MaxApi';

/**
 * @description DeliveryForm component
 * @class
 */
class DeliveryForm extends Component {
  /**
   * Creates an instance of DeliveryForm.
   * @memberof DeliveryForm
   * @param {object} props
   */
  constructor() {
    super();
    this.state = {
      pickup: '',
      delivery: '',
      formValid: false,
      pickupLatLng: {},
      deliveryLatLng: {},
      estimatedDeliveryFee: 0,
      error: false
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getEstimateDeliveryFee = this.getEstimateDeliveryFee.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  /**
     * @description Grabs the coordinates for
     *              origin and destination inputed
     * @param {object} event
     * @returns {void}
     * @memberof DeliveryForm
     */
  handleUserInput(event) {
    const { name, value } = event.target;
    this.setState(
      { [name]: value },
    );
    this.validateField();
    this.getCoordinates(event.target);
  }

  validateField() {
    const { pickup, delivery } = this.state;

    if (pickup !== '' && delivery !== '') {
      this.setState({
        formValid: true
      });
    }
    return false;
  }

  /**
   * @description gets the coordinates for
   *              origin and destination inputed
   * @param {object} element
   * @returns {void}
   * @memberof DeliveryForm
   */
  getCoordinates(element) {
    const inputNodes = document.getElementById(element.id);
    const options = {
      // types: ['(cities)'],
      componentRestrictions: { country: 'ng' }
    };

    const autoComplete = new window.google.maps.places.Autocomplete(inputNodes, options);

    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      const { location } = place.geometry;

      this.setState({
        [`${element.id}LatLng`]: {
          place_id: place.place_id,
          location: location.toString(),
          lat: location.lat(),
          lng: location.lng()
        },
        [element.name]: place.formatted_address
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
    }).catch((error) => {
      this.setState({ error });
    });
  }

  /**
   * @description
   * @returns {JSX.Element} DeliveryForm
   * @memberof DeliveryForm
   */
  render() {
    return (
      <div className="main">
        <Form>
          <FormGroup>
            <Label
              className="form-label"
              for="pickup"
            >
              Pickup Location
            </Label>
            <Input
              id="pickup"
              className="form-control"
              name="pickup"
              placeholder="Enter pickup location"
              onChange={this.handleUserInput} />
          </FormGroup>
          <FormGroup>
            <Label
              className="form-label"
              for="delivery"
            >
              Delivery Location
            </Label>
            <Input
              id="delivery"
              className="form-control"
              name="delivery"
              placeholder="Enter delivery location"
              onChange={this.handleUserInput} />
          </FormGroup>
          <Button
            className="actions"
            onClick={this.getEstimateDeliveryFee}
            disabled={!this.state.formValid}
          >
            Get Estimate Fee
          </Button>
          <span className="form-heading section-title" >Delivery Fee: N{this.state.estimatedDeliveryFee}</span>
        </Form>
      </div>
    );
  }
}

export default DeliveryForm;
