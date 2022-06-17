import { MultiRangeSlider } from '../MultiRangeSlider';
// import { rangeSliderMin, rangeSliderMax } from '../../helpers/constants';

export const PriceRange = () => {

  return (
    <div className='flex flex-between price-range-wrapper desktop-only brd'>
      <h3>შეთავაზებები</h3>
      <MultiRangeSlider
      // min={rangeSliderMin}
      // max={rangeSliderMax}
      />
    </div>
  );
};