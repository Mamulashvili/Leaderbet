import { CardTitle } from './CardTitle';

export const CardContent = ({ desc, discountPrice, originalPrice, title, details }) => {
  return (
    <>
      <CardTitle
        title={title}
        hoverTitle={desc}
      />
      <div className="card-content">
        <p className="card-desc">
          {desc}
        </p>
        <p className='card-details-hover'>
          {details}
        </p>

        <p className="card-price">
          {
            discountPrice && (
              <span> {discountPrice} </span>
            )
          }
          <span className={`${discountPrice ? 'line-through-enabled' : ''} line-through`}>
            {originalPrice}
          </span>
        </p>
        <div className='card-hover'>
          <CardHoverButtons />
        </div>
      </div>
    </>
  );
};

const CardHoverButtons = () => {
  return (
    <div className="btn-group">
      <div className="card-btn btn-green">
        შეძენა
      </div>
      <div className="card-btn btn-blue">
        <p className='w-1'> აჩუქე </p> მეგობარს
      </div>
    </div>
  );
};