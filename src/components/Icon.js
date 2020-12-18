import { string } from 'prop-types';
import React from 'react';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  name: string,
};
export default Icon;
