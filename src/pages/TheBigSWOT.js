import React from 'react'
import TopHead from '../components/TopHead';
import Sidebar from '../components/Sidebar';
import Content from '../components/content/TheBigSWOTContent';
import Footer from '../components/Footer';

export default function TheBigSWOT() {
    return (
        <div>

            <div id="main-wrapper">

                <TopHead />

                <Sidebar />

                <Content />

            </div>

            <Footer />

        </div>
    )
}
