import React, { useEffect, useState } from 'react';
import { SideBar } from './SideBar';
import { ContentWrapper } from './ContentWrapper';
import './style.scss';
// import { fetchData } from '../../api/client';
import data from '../../data/data.json';
import { FilterProvider } from '../../Context/FilterContext';


export const Content = () => {
  const [ respData, setRespData ] = useState(null);

  useEffect(() => {
    setRespData(data.data);
  }, []);

  const menuTags = respData?.menuTags.map(menuTag => {
    return {
      ...menuTag,
      name: respData.tags[ menuTag.id ].name,
      children: [
        menuTag.children.length > 0 && menuTag.children.map(menuTagChild => {
          return {
            id: menuTagChild,
            name: respData.tags[ menuTagChild ].name
          };
        })
      ][ 0 ]
    };
  });

  return (
    <main className='flex'>
      {
        respData && (
          <>
            <FilterProvider>
              <SideBar menuTags={menuTags} />
              <ContentWrapper
                currencies={respData?.currencies}
                marketItem={respData?.marketItem}
                products={respData?.products}
                filterBarTags={respData?.filterBarTags}
                tags={respData?.tags}
                discounts={respData?.discounts}
              />
            </FilterProvider>
          </>
        )
      }
    </main>
  );
};