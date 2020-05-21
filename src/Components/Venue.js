import React, { Component } from 'react';
import classNames from 'classnames';

export default class Venue extends Component {

    

    render(){
        const { imageUrl, name, location, className, website, number,recommendations } = this.props;
        const wrapperCls = classNames( '', className );
        const renderOtherRecommendationsLabel = ( otherRecommendations ) => {
            if ( otherRecommendations.length === 0 ) {
              return (
                <text>
                  {'1 recommendation.'}
                </text>
              );
            }
        
            if ( otherRecommendations.length === 1 ) {
              return (
                <text>
                  {'1 recommendation.'}
                </text>
              );
            }
        
            if ( otherRecommendations.length === 2 ) {
              return (
                <text>
                  {'+ 1 more recommendation.'}
                </text>
              );
            }
        
            if ( otherRecommendations.length === 3 ) {
              return (
                <text>
                  {'+ 2 more recommendations.'}
                </text>
              );
            }
        
            if ( otherRecommendations.length === 4 ) {
              return (
                <text>
                  {'+ 3 more recommendations.'}
                </text>
              );
            }
            
            return (
              <text>
                {`+ ${otherRecommendations.length - 1} more recommendation${otherRecommendations.length - 1 > 1 ? 's' : ''}`}
              </text>
            );
          }



        return (
            
            <div className={wrapperCls}>
                <div className="expert-card">
                    <div className="recommendation-wrapper">                        
                        
                        <div className="food-image" style={{ backgroundImage: `url("${imageUrl  }")`}} />                                                                                                               

                    </div>
                    <div className="expert-info-card">
                            <div className="expert-info">
                                <span className="venue text-span-2"> Chinese hamburger </span>
                            </div>
                            <div className="expert-info name">
                                <strong className="bold-text">{name}</strong>
                            </div>
                            <div className="expert-info">
                                <span className="venue text-span-2"> {location} </span>
                            </div>
                            <div className="number_rec">
                                <div className="profile-pic" style={{ backgroundImage: `url("${recommendations[0]&&recommendations[0].author.profilePicture || 'https://imageproxy.staging.hfg.clients.pipelabs.com.au/128x128/https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' }")`}} />                    
                                <div className="profile-pic" style={{ backgroundImage: `url("${recommendations[2]&&recommendations[2].author.profilePicture  }")`}} />                    
                                <div className="profile-pic" style={{ backgroundImage: `url("${recommendations[3]&&recommendations[3].author.profilePicture  }")`}} />                    
                                
                                <div className="number_label">
                                {renderOtherRecommendationsLabel(recommendations.slice(1,recommendations.length))}
                                </div>
                            </div>

                    </div>                                       
               </div> 
            </div>
        );
    }
}