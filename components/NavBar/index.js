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
      <Link href='/meet' passHref><NavLink onClick={()=>show()} >Meet Citrine</NavLink></Link>
      <Link href='/services' passHref><NavLink onClick={()=>show()} >Services</NavLink></Link>
      <Link href='/policies' passHref><NavLink onClick={()=>show()} >Policies</NavLink></Link>
      <Link href='/links' passHref><NavLink onClick={()=>show()} >Affiliate Links</NavLink></Link>
      {/* <NavLink onClick={()=>show()}><Link href='/faq' passHref>FAQ</Link></NavLink> */}
    </NavLinkList>
  </>

  );
};

export default NavBar;
