import React from 'react';
import axios from 'axios';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './drfarm.css';

let nasaLink;

class DrFarm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: 'ok' };
    this.state = { img: 'tile-wide.png' };

    this.setAddress = this.setAddress.bind(this);
    this.getAddress = this.getAddress.bind(this);
  }
  setAddress(e) {
    this.setState({ address: e.target.value });
  }

  getAddress() {
    this.geocoder = new window.google.maps.Geocoder();
    this.geocoder.geocode({ address: this.state.address }, function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {
        this.position = results[0].geometry.location;
        axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${this.position.lng()}&lat=${this.position.lat()}&api_key=DEMO_KEY`)
        .then(function (response) {
          nasaLink = response.data.url;
        });
      }
    });
    console.log(nasaLink);
    this.setState({ img: nasaLink });
  }
  render() {
    return (
      <div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"async defer />
        <div className={s.form}>
          <input className={s.address} id="address" type="text" value={this.state.address} onChange={this.setAddress} />
          <button value="OK" onClick={this.getAddress}>OK</button>
        </div>
        <h3>Showing Satellite Imagery for {this.state.address}</h3>
        <div className={s.image}>
          <img src={this.state.img} alt="" />
        </div>
        <div className={s.buttons}>
          <button className={s.button}>Temperature</button>
          <button className={s.button}>Water</button>
          <button className={s.infra}>InfraRed</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DrFarm);
