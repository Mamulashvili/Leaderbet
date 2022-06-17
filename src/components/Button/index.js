import './style.scss';

export const Button = ({
  text, appendIcon, prependIcon, classList, onClick
}) => {
  return (
    <div className={`button ${classList}`}>
      {
        appendIcon && (
          <div className='append-icon btn-icon'>
            {appendIcon}
          </div>
        )
      }
      <button
        className='btn'
        onClick={onClick}
      >
        {text}
      </button>
      {
        prependIcon && (
          <div className='prepend-icon btn-icon'>
            {prependIcon}
          </div>
        )
      }
    </div>
  );
};

Button.defaultProps = {
  classList: ''
};