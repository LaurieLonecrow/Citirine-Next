import Link from 'next/link';
import {useState} from 'react';
import { CgMenu } from 'react-icons/cg';
import Modal from '../ModalNav';
import Logo from '../Logo';
import { Nav, NavButton, NavLinkList, NavLink } from './NavBarStyles'

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);
    function show() {
      setShowModal(!showModal)
    }
  return (
    <>
    <Nav>
      <Logo onClick={()=>show()}/>   
      <NavButton onClick={()=>show()}><CgMenu/></NavButton>
    </Nav>
    <NavLinkList visible={showModal}>
      <NavLink onClick={()=>show()} ><Link href='/meet' passHref>Meet Citrine</Link></NavLink>
      <NavLink onClick={()=>show()}><Link href='/services' passHref>Services</Link></NavLink>
      <NavLink onClick={()=>show()}><Link href='/policies' passHref>Policies</Link></NavLink>
      <NavLink onClick={()=>show()}><Link href='/links' passHref>Affiliate Links</Link></NavLink>
      <NavLink onClick={()=>show()}><Link href='/faq' passHref>FAQ</Link></NavLink>
    </NavLinkList>
  </>

  );
};

export default NavBar;
