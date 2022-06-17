/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, memo } from 'react';
import { formatDate } from '../../helpers/func';
import { staticDataUrl } from '../../helpers/constants';
import { Card } from '../Card';
import { FilterContext } from '../../Context/FilterContext';
import { sideMenuDefaultValue } from '../../helpers/constants';
import { rangeSliderMin, rangeSliderMax } from '../../helpers/constants';

const Cards = ({ marketItem, products, discounts }) => {
  const { filter } = useContext(FilterContext);
  const [ sortData, setSortDate ] = useState([]);

  const sortFunc = sortType => {
    switch (sortType) {
      case 'desc': {
        return Object.values(marketItem).sort((a, b) => {
          return -(
            (a.discountPrice ? a.discountPrice : a.price) -
            (b.discountPrice ? b.discountPrice : b.price) ||
            a.name.localeCompare(b.name)
          );
        });
      }
      case 'asc': {
        return Object.values(marketItem).sort((a, b) => {
          return (
            (a.discountPrice ? a.discountPrice : a.price) -
            (b.discountPrice ? b.discountPrice : b.price) ||
            a.name.localeCompare(b.name)
          );
        });
      }
      case 'az': {
        return Object.values(marketItem).sort((a, b) => a.name.localeCompare(b.name));
      }
      case 'za': {
        return Object.values(marketItem).sort((a, b) => b.name.localeCompare(a.name));
      }
      default:
        return marketItem;
    }
  };

  const filterFunc = arr => {

    let tempArray = [];
    tempArray = arr
      .filter(item => item.currencyId === filter.currency);

    if (filter.menuTagChildren.length > 0) {
      tempArray = tempArray.filter(item =>
        filter.menuTagChildren.some((element => item.tags.includes(element)))
      );
    } else {
      if (filter.menuTag === sideMenuDefaultValue)
        tempArray = tempArray.filter(item => item.tags.includes(sideMenuDefaultValue));
      else tempArray = [];
    }

    if (filter.topFilter.length > 0)
      tempArray = tempArray.filter(item => item.tags.some(tag => filter.topFilter.includes(tag)));

    if (filter.min !== rangeSliderMin || filter.max !== rangeSliderMax) {
      tempArray = tempArray.filter(item => {
        let price = item.discountPrice ? item.discountPrice : item.price;

        if (price >= filter.min && price <= filter.max)
          return item;
        return false;
      });
    }

    return tempArray;
  };

  // Image depends on item id (not included in API)
  // eslint-disable-next-line no-unused-vars
  const generateBackgroundUrl = id => `${staticDataUrl}/${id}.png`;

  useEffect(() => {
    setSortDate(filterFunc(sortFunc(filter.sort)));
  }, [ filter ]);

  return (
    <div className='cards-wrapper' >
      {
        sortData.map((data, index) => {
          return <Card
            key={index}
            title={`${data.prizeAmount} ${data.prizeType}`}
            desc={data.name}
            discountPrice={data.discountPrice}
            originalPrice={data.price}
            details={products[ data.productId ]?.descr}
            date={formatDate(discounts[ data.discountId ]?.end_date)}
            percent={discounts[ data.discountId ]?.percent}
          // background={generateBackgroundUrl(item.productId)}
          />;
        })
      }
    </div >
  );
};

// Prevents not necessary re-rendering
export default memo(Cards);