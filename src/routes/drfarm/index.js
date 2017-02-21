import React from 'react';
import Layout from '../../components/Drfarm/layout';
import DrFarm from './drfarm';

export default {

  path: '/drfarm',

  action() {
    return {
      component: <Layout><DrFarm /></Layout>,
    };
  },

};
