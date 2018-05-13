/**
 * Asynchronously loads the component for Home
 */
import Loadable from 'react-loadable';
import Loading from '../Loading';

export default Loadable({
  loader: () => import('./index'),
  loading: Loading,
});