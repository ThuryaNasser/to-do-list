import React from 'react';
import SuspenseLoader from './SuspenseLoader';

const SuspenseWrapper = (props) => {
  const { children, ...rest } = props;
  return (
    <React.Suspense fallback={<SuspenseLoader />} {...rest}>
      {children}
    </React.Suspense>
  );
};

export default SuspenseWrapper;
