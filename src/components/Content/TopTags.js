import React, { useContext } from 'react';
import { Checkbox } from '../Checkbox';
import { FilterContext } from '../../Context/FilterContext';

export const TopTags = ({ filters }) => {
  const { filter, setFilter } = useContext(FilterContext);

  const checkboxFilters = (checked, value) => {
    if (checked)
      return setFilter({
        ...filter,
        topFilter: [ ...filter?.topFilter || [], value ]
      });

    setFilter({
      ...filter,
      topFilter: filter.topFilter.filter(filterItem => filterItem !== value)
    });
  };


  return (
    <div className='flex desktop-only'>
      {
        filters.map(({ id, name }) => {
          return (
            <React.Fragment
              key={id}>
              <Checkbox
                id={id.toString()}
                value={id}
                label={name}
                onChange={({ checked, value }) => checkboxFilters(checked, parseInt(value))}
              />
            </React.Fragment>
          );
        })
      }
    </div>
  );
};