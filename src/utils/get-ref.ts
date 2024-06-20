import { ReactElement } from 'react';

// Future proof: access ref from props, fallback to element.ref
// https://github.com/facebook/react/pull/28348
const getRef = (child: ReactElement) => {
  if ('ref' in child.props) return child.props.ref;
  if ('ref' in child) return child.ref;
  return null;
};

export default getRef;
