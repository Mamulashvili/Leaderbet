import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';

export const Logo = ({ alt }) => {
  return (
    <div
      className='logo-wrapper flex flex-center'>
      <figure>
        <img
          className='logo desktop-only'
          src={logo}
          alt={alt}
        />
      </figure>
    </div>
  );
};

Logo.propTypes = {
  alt: PropTypes.string
};

Logo.defaultProps = {
  alt: 'Logo'
};