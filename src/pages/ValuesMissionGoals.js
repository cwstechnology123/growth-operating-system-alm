import React from 'react'
import TopHead from '../components/TopHead';
import Sidebar from '../components/Sidebar';
import Content from '../components/content/ValuesMissionGoalsContent';
import Footer from '../components/Footer';

export default function ValuesMissionGoals() {
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
