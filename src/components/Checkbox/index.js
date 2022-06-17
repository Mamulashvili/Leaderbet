import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import './style.scss';

export const Checkbox = (props) => {
  const [ checked, setChecked ] = useState(false);

  useEffect(() => {
    setChecked(props.checked);
  }, [ props.checked ]);

  return (
    <div className='flex flex-center'>
      <input
        className="styled-checkbox"
        type="checkbox"
        id={props.id}
        value={props.value}
        onChange={e => {
          setChecked(!checked);
          props.onChange(e.target);
        }}
        checked={checked}
      />
      <label
        className='styled-checkbox-label'
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
};


Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  checked: false,
};