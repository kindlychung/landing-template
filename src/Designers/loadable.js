/**
 * Asynchronously loads the component for Designers
 */
 
import Loadable from 'react-loadable';
import Loading from '../Loading';

export default Loadable({
  loader: () => import('./index'),
  loading: Loading,
});