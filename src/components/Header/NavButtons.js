import { Button } from '../Button';
import betmarketIcon from '../../assets/images/betmarket.png';
import promotionIcon from '../../assets/images/promotion.png';

export const NavButtons = () => {
  return (
    <div className='nav-buttons-wraper flex'>
      <Button
        text='მარკეტი'
        appendIcon={
          <img
            src={betmarketIcon}
            alt='Bet market'
          />
        }
        classList='rounded nav-btn'
      />
      <Button
        text='აქციები'
        appendIcon={
          <img
            src={promotionIcon}
            alt='Promotion'
          />
        }
        classList='rounded nav-btn'
      />
    </div>
  );
};
