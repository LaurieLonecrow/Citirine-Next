import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <>
    <NavBar/>
      <main>{props.children}</main>
    <Footer/>
    </>
  )
};

export default Layout;
