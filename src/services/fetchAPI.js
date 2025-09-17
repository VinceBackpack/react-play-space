import { useState, useEffect } from "react";

export const baseURL = 'https://bayut.p.rapidapi.com';

export function GetList(url) {
    const [data, setData] = useState([]);
    const [setLoading] = useState(true);
    useEffect(() => {
        
        const fetchData = async () => {

            let response = await fetch (url, {
                'method': 'GET',
                'headers': {
                    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDBAYUT_API_KEY
                }
            })
            
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err))
            .then(setLoading(false))
        }
        
        fetchData()
        .catch(err => console.error(err));            
        },[]);

        return data;
    }