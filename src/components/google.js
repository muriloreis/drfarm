import { GoogleApiWrapper } from 'google-maps-react';
import DrFarm from '../routes/drfarm/drfarm';

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
})(DrFarm);
