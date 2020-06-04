import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../components/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (location, type) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, 
    {headers: {
       Authorization: `Bearer ${apiKey}`
    },
    params: {
      categories: {type},
    }
    }).then(res =>{      
        setPhotos(res.data.businesses);
        setLoading(false);
        
    }) .catch((err) => {
      console.log ('error')
    })
  };
  return (
    <PhotoContext.Provider value={{ photos, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;