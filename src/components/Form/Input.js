import './style.scss';

export const Input = props => {

  return (
    <div
      className={`input-wrapper flex flex-center ${props.inputWrapperClassList}`}>
      {
        props.appendElement && (
          <div>
            {props.appendElement}
          </div>
        )
      }
      <input
        className={`def-input ${props.inputClassList}`}
        placeholder={props.placeholder}
        type={props.type}
        onChange={e => props.onChange(e.target.value)}
        onFocus={() => props.onFocus()}
        onBlur={() => props.onBlur()}
      />
      {
        props.prependElement && (
          <div>
            {props.prependElement}
          </div>
        )
      }
    </div>
  );
};

Input.defaultProps = {
  classList: '',
  inputWrapperClassList: '',
  onFocus: () => { },
  onBlur: () => { },
  onChange: () => { },
};

