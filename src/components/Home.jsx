import React from 'react';
import image from '../assets/pizza.jpg'

function Home(props) {
    return (
        <div>
            <header className="w-100 w3-display-container w3-grayscale-min" id="home" style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", minHeight:650}}>
                <div className="w3-display-bottomleft w3-padding">
                    <span className="w3-tag w3-xlarge">Open from 10am to 12pm</span>
                </div>
                <div className="w3-display-middle w3-center">
                    <span className="w3-text-white w3-hide-small" style={{fontSize:'100px'}}>thin<br/>CRUST PIZZA</span>
                    <span className="w3-text-white w3-hide-large w3-hide-medium" style={{fontSize:'60px'}}><b>thin<br/>CRUST PIZZA</b></span>
                    <p><a href="/menu" className="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
                </div>
            </header>
        </div>
    );
}

export default Home;