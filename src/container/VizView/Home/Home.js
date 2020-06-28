import React from 'react';
import './Home.css';

import Slogan from "./Slogan/Slogan.js"
import Featured from "./Featured/Featured.js"
import WhatWeDo from "./WhatWeDo/WhatWeDo.js"
const home = () => {
    return (
        <div className="home">
            <div className="section">
                <Slogan />
            </div>
            <div className="section">
                <Featured />
            </div>
            <div className="section">
                <WhatWeDo />
            </div>
        </div>

    )

}

export default home;