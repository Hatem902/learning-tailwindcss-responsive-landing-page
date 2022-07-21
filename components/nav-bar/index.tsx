import Link from 'next/link';
import Button from '../reusable/main-button';
import { NavItems } from './nav-items';
const NavBar = () => {
  return (
    <nav className='center flex py-6 justify-between items-center '>
      <img className='pt-5 pb-2' src='/img/logo.svg' />
      <div className='hidden lg:flex space-x-6 text-xl '>
        {NavItems.map((navItem) => (
          <Link href='#' key={navItem}>
            <span className='hover:text-darkGrayishBlue cursor-pointer'>
              {navItem}
            </span>
          </Link>
        ))}
      </div>
      <Button responsive={true} />
    </nav>
  );
};

export default NavBar;
