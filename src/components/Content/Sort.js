import { useState, useContext } from 'react';
import { sortData } from '../../helpers/constants';
import { SortItem } from './SortItem';
import { FilterContext } from '../../Context/FilterContext';

export const Sort = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [ showSort, setShowSort ] = useState(false);

  return (
    <div className='flex flex-between'>
      <div
        onClick={() => setShowSort(!showSort)}
        className='sort sort-btn relative'
      >
        <div
          className={
            `sort-list absolute ${showSort ? 'sort-list-active' : ''}`
          }
        >
          <ul>
            {
              sortData.map(({ text, value, checked }) => {
                return (
                  <SortItem
                    key={value}
                    id={value}
                    value={value}
                    text={text}
                    checked={checked}
                    handleChange={({ value }) => {
                      setFilter({
                        ...filter,
                        sort: value
                      });
                    }}
                  />
                );
              })
            }
          </ul>
        </div>
      </div>
      <div className='legals sort-btn'></div>
    </div >
  );
};;
