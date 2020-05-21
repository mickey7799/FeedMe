import React, { Component } from 'react';
import classNames from 'classnames';


export default class Company extends Component {

    render(){
        const {className} = this.props;
        const wrapperCls = classNames( '', className );

        return (
            
            <div className={wrapperCls}>
                <div className="company-card">
                    <div className="flex-item-logo"> 
                    <img src="/images/HFG_icon_yellow.png" alt="app" className="logo mobile" width="56" height="60"/>
                    <img src="/images/HFG_main_yellow_dropshadow.png" alt="app" className="logo"/>


                    </div>
                    <div className="intro-container flex-item-info">
                        <h1 className="home-headline h1 ">
                        Discover better restaurants, faster, with Hood Food Guide.
                        </h1>
                        <div className="home-text-block ">   
                        See where top chefs &amp; restaurant owners  
                        <br/>
                        love to eat in every neighbourhood.
                        <br/>  
                        <br/>
                        <span className="text-span">Download &amp; try Hood Food Guide today.</span>
                        </div>
                        <a className="app-store-wrapper" href="https://www.instagram.com/hoodfoodguide/" target="_blank">
                            <img src="/images/180ae7a0bcf7.png" width="144" height="43" alt="app" className="app-store"/>
                            <img src="/images/e9cd846dc748.png" width="144" height="43" alt="play" className="play-store"/>
                        </a>
                        
                    </div>
                </div>
            </div>
        );
    }
}