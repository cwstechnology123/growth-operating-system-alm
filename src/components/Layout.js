import React from 'react';
import ChatBox from './ChatBox';
import Footer from './Footer';
import Header from './Header';
import Preloader from './Preloader';
import Sidebar from './Sidebar';
import TopHead from './TopHead';

const Layout =({children}) =>{
    return(
        <>
    <div>

        <Preloader />

        <div id="main-wrapper">

            <TopHead />

            <ChatBox />

            <Header />

            <Sidebar />

            <main>{children}</main>

            <Footer />

        </div>
    </div>
</>
    )
}

export default Layout;
