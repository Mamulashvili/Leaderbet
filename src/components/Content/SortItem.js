import { Radio } from '../Checkbox/Radio';

export const SortItem = ({ text, value, id, handleChange, checked }) => {

  return (
    <li>
      <Radio
        id={id}
        value={value}
        label={text}
        checked={checked}
        name={'test'}
        onChange={e => handleChange(e)}
      />
    </li>
  );
};