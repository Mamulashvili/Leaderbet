import { Checkbox } from '../Checkbox';

export const AccordionItem = ({
  selected,
  id,
  name,
  toggle,
  children,
  menuTagCheckboxChange
}) => {

  return (
    <div
      className=
      {`accordion-item ${selected === id ? 'accordion-item-active' : ''}`}
      onClick={() => toggle(id)}
    >
      <div className='accordion-title flex flex-between'>
        {name}
        <i className={`arrow ${selected === id ? 'rotate-arrow' : ''} ${!children && 'no-visible'}`}>
        </i>
      </div>

      {
        children && (
          <div
            className={
              `accordion-content ${selected === id ? 'accordion-content-show' : ''}`
            }
          >
            <ul>
              {
                children && (
                  children.map(item => {
                    return (
                      <li
                        key={item.id}>
                        <Checkbox
                          checked={true}
                          value={item.id}
                          label={item.name}
                          id={item.id.toString()}
                          onChange={({ checked, value }) => menuTagCheckboxChange(checked, value)}
                        />
                      </li>
                    );
                  })
                )
              }
            </ul>
          </div>
        )
      }
    </div>
  );
};