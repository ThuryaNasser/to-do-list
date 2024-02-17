import React from 'react';
import Loader from './Loader';

const Loadable = (Component) => (props) =>
(
  <React.Suspense fallback={<Loader />}>
    <Component {...props} />
  </React.Suspense>
);

export default Loadable;
