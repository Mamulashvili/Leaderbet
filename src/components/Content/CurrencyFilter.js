import { useContext, memo } from 'react';
import { Toggler } from '../Toggler';
import { FilterContext } from '../../Context/FilterContext';

export const CurrencyFilter = memo(({ currencies }) => {
  const { filter, setFilter } = useContext(FilterContext);
  const { LBP, GEL } = currencies;

  return (
    <Toggler
      id='currency'
      textBefore={GEL.name}
      textAfter={LBP.name}
      onChange={e => setFilter({
        ...filter,
        currency: e ? 'LBP' : 'GEL'
      })}
    />
  );
});