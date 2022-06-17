import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import './style.scss';
import { AccordionItem } from './AccordionItem';
import { FilterContext } from '../../Context/FilterContext';
import { sideMenuDefaultValue } from '../../helpers/constants';
const DEFAULT_SELECTED = 19;

export const Accordion = ({ menuTags }) => {
  const { filter, setFilter } = useContext(FilterContext);
  const [ selected, setSelected ] = useState(DEFAULT_SELECTED);

  const toggleAndStoreFilter = (id, item) => {
    // Store selected filter
    if (filter?.menuTag !== id) {
      setFilter({
        ...filter,
        menuTag: item.id,
        menuTagChildren: item.children ? item?.children.map(({ id }) => id) : []
      });
    }
    // else {
    //   setFilter({
    //     ...filter,
    //     menuTag: DEFAULT_SELECTED,
    //     menuTagChildren: []
    //   });
    // }

    if (selected === id) {
      return setSelected(sideMenuDefaultValue);
    }

    setSelected(id);
  };

  const updateMenuTagFilter = (checked, value) => {
    if (!checked) {
      return setFilter({
        ...filter,
        menuTagChildren: filter.menuTagChildren.filter(item => item !== value)
      });
    }

    setFilter({
      ...filter,
      menuTagChildren: [ ...filter.menuTagChildren, value ]
    });
  };

  return (
    <div className='accordion'>
      {
        Object.values(menuTags).map((item) => {
          return <AccordionItem
            id={item.id}
            key={item.id}
            name={item.name}
            selected={selected}
            children={item.children}
            toggle={id => toggleAndStoreFilter(id, item)}
            menuTagCheckboxChange={
              (checked, value) =>
                updateMenuTagFilter(
                  checked,
                  parseInt(value),
                )
            } />;
        })
      }
    </div>
  );
};

Accordion.propTypes = {
  menuTags: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

Accordion.defaultProps = {
  menuTags: {},
};