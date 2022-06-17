export const SaleBox = ({ date, percent }) => {
  return (
    <div className="sale-box">
      <small> {date} </small>
      <span> {`-${percent}%`} </span>
    </div>
  );
};