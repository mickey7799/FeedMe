import React, { Component } from 'react';

export default class Header extends Component {

    render(){

        return (
            <div data-collapse="none" data-animation="default" data-duration="400" className="navbar w-nav">
                <div className="w-container">
                    
                    <img src="/images/mini-donut.svg" alt="alt_image" className=" w-nav-brand  h-logo"/>
                    
                    <nav role="navigation" className="w-nav-menu">
                        <a  href= "https://www.yelp.com/" className="nav-link w-nav-link" style={{maxWidth: 940+'px'}}>Yelp</a>
                        <a  href="https://www.instagram.com/yelp/?hl=en" target="_blank" rel="noopener noreferrer" className="Home__InstagramLink-sc-1sbsg8u-0 kCEMFk">
                            <img src="/images/instagram.svg"/>
                        </a>
                    </nav>
                    <div className="w-nav-button">
                        <div className="w-icon-nav-menu"/>
                    
                    </div>
                </div>
                <div className="w-nav-overlay" data-wf-ignore=""></div>
            </div>
        );
    }
}            