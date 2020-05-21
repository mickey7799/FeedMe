import React, { Component } from 'react';

export default class Footer extends Component{

    render(){
        return (
            <div id="Footer" className="footer">
                <div className="footer-container w-container">
                    <div className="footer-wrapper-top">
                        <a href="/" className="hood-food-guide-link w-inline-block w--current">
                            <img src="/images/HFG_main_black.png" width="160" height="44" alt="" className="hood-food-guide-logo"/>
                            <img src="/images/HFG_icon_yellow.png" alt="app" className="hood-food-guide-logo mobile" width="37" height="40"/>

                        </a>
                        <a href="mailto:contact@hoodfoodguide.com" className="link">Contact</a>
                        <a href="https://instagram.com/hoodfoodguide" target="_blank" rel="noopener noreferrer" className="Footer__InstagramLink-sc-1mb098p-0 bBdLAF">
                            <img src="/images/instagram.svg"/>
                        </a>
                        <div className="text-block">© 2019 Hood Food Guide</div>
                    </div>
                </div>
            </div>
        );
    }
}