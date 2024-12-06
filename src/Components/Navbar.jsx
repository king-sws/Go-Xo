import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";

const Navbar = ({ navOpen })  => {
  const lastActiveLink = useRef();
  const activebox = useRef();

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '',
      className: 'nav-link md:hidden'
    }
  ];
  const initActiveBox = ()=> {
    activebox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activebox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activebox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activebox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }
  useEffect(initActiveBox, [])
  window.addEventListener('resize' , initActiveBox)

  const activeCurrentLink = (e) =>{
    lastActiveLink.current?.classList.remove('active');
    e.target.classList.add('active');
    lastActiveLink.current = e.target
    activebox.current.style.top = e.target.offsetTop + 'px';
    activebox.current.style.left = e.target.offsetLeft + 'px';
    activebox.current.style.width = e.target.offsetWidth + 'px';
    activebox.current.style.height = e.target.offsetHeight + 'px';

    

  }

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '') }>
      {navItems.map(({ link, label, className, ref }, key) => (
        <a href={link} key={key} ref={ref} onClick={activeCurrentLink} className={className}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activebox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;

