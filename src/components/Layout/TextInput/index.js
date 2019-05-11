import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({
  label, name, value, placeholder, type, onChange,
}) => (
  <div className="form-group">
    <label htmlFor="name">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="form-control form-control-lg"
      value={value}
      onChange={onChange}
    />
  </div>
);

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

TextInputGroup.defaultProps = {
  placeholder: '',
  value: '',
};

export default TextInputGroup;
