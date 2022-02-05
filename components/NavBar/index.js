import Link from 'next/link';
import {useState} from 'react';
import Modal from '../ModalNav';
import Logo from '../Logo';
import { Nav, NavLinkList, NavLink } from './NavBarStyles'

const NavBar = () => {
    const [showModal, setShowModal] = useState(true);
    function show() {
        return setShowModal(!showModal)
    }
    function showModalMenu() {
      showModal ? <Modal onClick={()=> show()}/> : null
    }
  return (
  <Nav>
      <Logo/>   
      <NavLinkList>
          <NavLink><Link href='/meet'>Meet Citrine</Link></NavLink>
          <NavLink><Link href='/services'>Services</Link></NavLink>
          <NavLink><Link href='/policies'>Policies</Link></NavLink>
          <NavLink><Link href='/links'>Affiliate Links</Link></NavLink>
          <NavLink><Link href='/faq'>FAQ</Link></NavLink>
        </NavLinkList>
      {/* <Modal onClick={()=> show()}/> */}
  </Nav>
  );
};

export default NavBar;
