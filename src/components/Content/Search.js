import { useContext } from 'react';
import { Input } from '../Form/Input';
import { FilterContext } from '../../Context/FilterContext';

export const Search = () => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div className='flex flex-1 flex-end desktop-only'>
      <Input
        placeholder='ძებნა'
        inputWrapperClassList='search-input-wrapper'
        inputClassList='search-input w-1'
        onChange={value => setFilter({
          ...filter,
          search: value
        })}
      />
    </div>
  );
};