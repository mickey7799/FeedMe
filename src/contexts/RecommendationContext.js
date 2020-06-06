import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { apiKey } from "../components/config";
export const RecommendationContext = createContext();

const RecommendationContextProvider = props => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const runSearch = useCallback((location, type) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        },
        params: {
          categories: type,
          limit: 1,
          open_now: true
        }
      }).then(res => {
        console.log(res.data.businesses[0]);
        setRecommendations(res.data.businesses[0]);
        setLoading(false);

      }).catch((err) => {
        console.log('error')
      })
  }, []);

  useEffect(() => {
    runSearch('US', 'Breakfast');
  }, [runSearch])
  
  return (
    <RecommendationContext.Provider value={{ recommendations, loading, runSearch }}>
      {props.children}
    </RecommendationContext.Provider>
  );
};

export default RecommendationContextProvider;