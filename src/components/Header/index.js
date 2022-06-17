
import './style.scss';
import { Logo } from './Logo';
import { NavButtons } from './NavButtons';
import { AuthForm } from './AuthForm';

export const Header = () => {
  return (
    <header className='flex flex-between'>
      <div className='flex flex-center'>
        <Logo />
        <NavButtons />
      </div>
      <AuthForm />
    </header>
  );
};