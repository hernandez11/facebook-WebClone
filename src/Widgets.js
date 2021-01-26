import React from 'react'
import "./Widgets.css";

function Widgets( ) {
    return (
        <div className="widgets">
            <iframe
                src="https://techcrunch.com/2020/09/17/facebook-launches-facebook-business-suite-an-app-for-managing-business-accounts-across-facebook-instagram-and-messenger/"
                width="340"
                height="100%"
                style={{boder: "none", overflow: "hidden"}}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    );
}

export default Widgets;