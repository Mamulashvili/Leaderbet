import PropTypes from 'prop-types';
import './style.scss';

export const Toggler = props => {
  return (
    <div className='toggler flex flex-between'>
      {
        props.textBefore && (
          <label> {props.textBefore} </label>
        )
      }
      <input
        type='checkbox'
        id={props.id}
        onChange={e => props.onChange(e.target.checked)}
      />
      <label className='toggler-label' htmlFor={props.id}></label>
      {
        props.textAfter && (
          <label> {props.textAfter} </label>
        )
      }
    </div>
  );
};

Toggler.propTypes = {
  id: PropTypes.string.isRequired,
};