import { useRef } from 'react';
import PropTypes from 'prop-types';
import { TopTags } from './TopTags';
import { CurrencyFilter } from './CurrencyFilter';
import { Search } from './Search';
import { Sort } from './Sort';
import { TopTagsMobile } from './TopTagsMobile';
import { PriceRange } from './PriceRange';
import Cards from './Cards';

export const ContentWrapper = ({
  currencies,
  marketItem,
  products,
  filterBarTags,
  tags,
  discounts
}) => {

  const filtersRef = useRef([]);
  // Top menu tags;
  filtersRef.value = Object.values(filterBarTags).map(filter => {
    return {
      ...filter,
      name: tags[ filter.id ]?.name
    };
  });

  return (
    <section className='content-wrapper brd'>
      <div className='top-tags-wrapper flex'>
        <TopTags filters={filtersRef.value} />
        <CurrencyFilter currencies={currencies} />
        <Search />
        <div className='flex'>
          <TopTagsMobile filters={filtersRef.value} />
          <Sort />
        </div>
        {/* End of Mobile filters */}
      </div>
      {/* End of filters menu */}
      <PriceRange />
      <Cards
        marketItem={marketItem}
        products={products}
        discounts={discounts}
      />
    </section>
  );
};

ContentWrapper.propTypes = {
  currencies: PropTypes.object,
  marketItem: PropTypes.object,
  products: PropTypes.object,
  filterBarTags: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  tags: PropTypes.object,
  discounts: PropTypes.object,
};

ContentWrapper.defaultProps = {
  currencies: {},
  marketItem: {},
  products: {},
  filterBarTags: [],
  tags: {},
  discounts: {},
};

