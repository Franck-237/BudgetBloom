import React from 'react';
import Navbar from '@/Components/Navbar.jsx';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Main from '@/Components/Main';

const Welcome = () => {
  return (
    <div>
        <div>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    </div>
  )
};

export default Welcome;