import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{paddingTop:'79px'}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout