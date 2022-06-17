import PropTypes from 'prop-types';
import './style.scss';

export const Radio = (props) => {

  return (
    <div className='flex flex-center'>
      <input
        className="styled-checkbox"
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={e => {
          props.onChange(e.target);
        }}
        defaultChecked={props.checked}
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


Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

Radio.defaultProps = {
  defaultChecked: false,
};