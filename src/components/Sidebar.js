import React from 'react';
import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <li>
                        <Link to="/contents" className="has-arrow " aria-expanded="false">
                            <img src="images/svg/content.png" alt="img" />
                            <span className="nav-text">Contents</span>
                        </Link>
                    </li>
                    <li><Link to="/state-of-business" className="has-arrow " aria-expanded="false">
                        <img src="images/svg/2.png" alt="img"/>
                        <span className="nav-text">State of the Business</span>
                    </Link>
                    </li>
                    <li><Link to="/revanue-growth-drivers" className="has-arrow " aria-expanded="false">
                        <img src="images/svg/3.png" alt="img"/>
                        <span className="nav-text">Revenue Growth Drivers </span>
                    </Link>
                    </li>
                    <li><Link className="has-arrow " to="/120-growth-benchmark" aria-expanded="false">
                        <img src="images/svg/4.png" alt="img"/>
                        <span className="nav-text"> 120 Growth Benchmark</span>
                    </Link>
                    </li>
                    <li><Link to="/growth-planning" className="has-arrow " aria-expanded="false">
                        <img src="images/svg/5.png" alt="img"/>
                        <span className="nav-text"> Growth Planning </span>
                    </Link>
                    </li>
                    <li><Link to="/strategic-foundation" className="has-arrow " aria-expanded="false">
                        <img src="images/svg/3.png" alt="img"/>
                        <span className="nav-text"> Strategic Foundation </span>
                    </Link>
                    </li>
                    <li><Link to="/revenue-growth-tools" className="has-arrow " aria-expanded="false">
                        <img src="images/svg/4.png" alt="img"/>
                        <span className="nav-text"> Revenue Growth</span>
                    </Link>
                    </li>
                    <li><Link to="/" className="has-arrow " aria-expanded="false">
                        <img src="images/svg/8.png" alt="img"/>
                        <span className="nav-text"> Ability &amp; Agility </span>
                    </Link>
                    </li>
                    <li><Link to="/" className="has-arrow " aria-expanded="false"> 
                    	<img src="images/svg/6.png" alt="img" /> Problem Solving Tools </Link>
                    </li>
                    <li><Link to="/" className="has-arrow " aria-expanded="false">
                        <img src="images/svg/7.png" alt="img" /> Miscallaneous Tools </Link>
                    </li>
                </ul>
                {/* <div class="cLinkpyright">
                <p><strong>Invome Admin Dashboard</strong> © 2021 All Rights Reserved</p>
                <p class="fs-12">Made with <span class="heart"></span> by DexignLabs</p>
            </div> */}
            </div>
        </div>
    )
}
