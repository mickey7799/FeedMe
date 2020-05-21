import React, { Component } from 'react';
import classNames from 'classnames';

export default class Header extends Component {

    render(){
        const {className} = this.props;
        const wrapperCls = classNames( 'company-container', className );

        return (
            <div data-collapse="none" data-animation="default" data-duration="400" className="navbar w-nav">
                <div className="w-container">
                    <a href="https://hoodfoodguide.com/" target="_blank" className="brand w-nav-brand w--current">
                        <img src="https://imageproxy.staging.hfg.clients.pipelabs.com.au/74x80/https://uploads-ssl.webflow.com/5c68aa0a46b367677ef35fd6/5c6a0dd895409809b2769696_HFG_icon_yellow-2.png" alt="" className="h-logo"/>
                    </a>
                    <nav role="navigation" className="w-nav-menu">
                        <a href="https://hood-food-guide.webflow.io/watch" className="nav-link w-nav-link" style={{maxWidth: 940+'px'}}>Watch</a>
                        <a href="https://instagram.com/hoodfoodguide" target="_blank" rel="noopener noreferrer" className="Home__InstagramLink-sc-1sbsg8u-0 kCEMFk">
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