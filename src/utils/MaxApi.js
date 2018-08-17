import axios from 'axios';

/**
 * API class
 * @class MaxApi
 */
class MaxApi {
  /**
   * @description Gets estimated fee
   * @method
   * @param {object} originLatlng
   * @param {object} destinationLatLng
   * @returns {integer} estimatedDeliveryFee
   */
  static getPriceEstimate(originLatlng, destinationLatLng) {
    const apiKey = process.env.API_KEY;
    const serviceId = process.env.SERVICE_ID;
    const request = {
      origin: {
        lat: originLatlng.lat,
        lng: originLatlng.lng
      },
      destination: {
        lat: destinationLatLng.lat,
        lng: destinationLatLng.lng
      },
      service_id: serviceId
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey
      }
    };
    const apiUrl = 'https://sandbox.max.ng/v1/pricings/estimate';

    return axios.post(apiUrl, request, config).then(
      (response) => { return response.data.data.delivery_fee; }
    ).catch((error) => {
      return error;
    });
  }
}

export default MaxApi;
