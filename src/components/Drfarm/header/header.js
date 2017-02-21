import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../routes/drfarm/drfarm.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>AS LITTLE CUP</h1>
      </div>
    );
  }
}
export default withStyles(s)(Header);
