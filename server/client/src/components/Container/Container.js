import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Container.scss'

const { node, string } = PropTypes;


Container.propTypes = {
  children: node,
  className: string
};


function Container(props) {
  const { children, className } = props;

  return (
    <div className={cn('Container', className)}>
      {children}
    </div>
  );
}


export default Container;
