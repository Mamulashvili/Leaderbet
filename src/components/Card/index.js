import './style.scss';
import { SaleBox } from './SaleBox';
import { CardContent } from './CardContent';

export const Card = ({
  title,
  desc,
  discountPrice,
  originalPrice,
  details,
  date,
  percent,
  background
}) => {

  return (
    <div
      style={{ background: `url(${background || 'https://staticdata.lider-bet.com/images/market/12670.png'}) no-repeat center top` }}
      className="card-wrapper" >
      {
        percent && date && (
          <SaleBox
            date={date}
            percent={percent}
          />
        )
      }
      <div className="card-item">
        <CardContent
          title={title}
          desc={desc}
          discountPrice={discountPrice}
          originalPrice={originalPrice}
          details={details}
        />
      </div>
    </div >
  );
};
