import React from 'react';

function About(props) {
    return (
        <div>
            <div className="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge" id="about">
            <div className="w3-content">
                <h1 className="w3-center w3-jumbo" style={{marginBottom: '64px'}}>About</h1>
                <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><strong>The Chef?</strong> Mr. Italiano himself<img src={require("../assets/chef.jpg")} style={{width:'150px'}} className="w3-circle w3-right" alt="Chef"/></p>
                <p>We are proud of our interiors.</p>
                <img src={require("../assets/onepage_restaurant.jpg")} style={{width: '100%'}} className="w3-margin-top w3-margin-bottom" alt="Restaurant"/>
                <h1><b>Opening Hours</b></h1>
                
                <div className="w3-row">
                <div className="w3-col s6">
                    <p>Mon & Tue CLOSED</p>
                    <p>Wednesday 10.00 - 24.00</p>
                    <p>Thursday 10:00 - 24:00</p>
                </div>
                <div className="w3-col s6">
                    <p>Friday 10:00 - 12:00</p>
                    <p>Saturday 10:00 - 23:00</p>
                    <p>Sunday Closed</p>
                </div>
                </div>
                
            </div>
            </div>

        </div>
    );
}

export default About;