export const TopTagsMobile = ({ filters }) => {

  return (
    <select
      className='mobile-only dropdown'
      defaultValue={'all'}>
      <option value='all'> ყველა </option>
      {
        Object.keys(filters).map((id, name) => {
          return (
            <option
              key={id}
              value={name}
            >
              {name}
            </option>
          );
        })
      }
    </select>
  );
};