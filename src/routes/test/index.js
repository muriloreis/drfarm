import React from 'react';
import Layout from '../../components/Layout';
import Test from './test';

export default {

  path: '/test',

  action() {
    return {
      component: <Layout><Test /></Layout>,
    };
  },

};
