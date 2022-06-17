import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [ filter, setFilter ] = useState({
    currency: 'GEL',
    menuTag: 19,
    menuTagChildren: [],
    sort: 'desc',
    min: 0,
    max: 1000,
    search: '',
    topFilter: [],
  });

  // const [ currency, setCurrency ] = useState('GEL');
  // const [ menuTag, setMenuTag ] = useState(19);
  // const [ sort, setSort ] = useState('desc');

  // const providerValue = useMemo(() => ({
  //   filter, setFilter,
  //   currency, setCurrency,
  //   menuTag, setMenuTag,
  // }), [ filter, currency, menuTag ]);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </FilterContext.Provider >
  );
};