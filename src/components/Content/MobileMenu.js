import { useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { largaScreenPx } from '../../helpers/constants';
import { Input } from '../Form/Input';

export const MobileMenu = props => {
  const [ inputFocus, setInputFocus ] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      {
        width > largaScreenPx ?
          <></> : (
            <div className='mobile-only flex flex-between mobile-menu-wrapper'>
              <div
                onClick={() => props.toggleResponsiveMenu()}
                className='mobile-menu-opener flex flex-center'
              >
                {'მენიუ'}
              </div>
              <>
                <Input
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                  inputWrapperClassList={
                    `search-input-wrapper2 ${(inputFocus && 'search-input-wrapper-focused') || ''}`
                  }
                  inputClassList={
                    `search-input w-1 ${(inputFocus && 'search-input-focused') || ''}`
                  }
                  onChange={value => console.log(value)}
                />
              </>
            </div>
          )
      }
    </>
  );
};