import { useState, useEffect } from "react";
export const baseURL = 'https://bayut16.p.rapidapi.com';

export function GetList(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //console.log('Fetching:', url);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
                        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDBAYUT_API_KEY
                    }
                });
                //console.log('Status:', response.status);

                if (!response.ok) {
                    const errorText = await response.text();
                    //console.log('API error response:', errorText);
                    throw new Error(`API request failed: ${response.status}`);
                }
                const result = await response.json();
                //console.log('Bayut API response:', result);
                setData(result);
            } catch (error) {
                console.error('Bayut API error:', error);
            }
        };
        fetchData();
    }, [url]);
    return data;
}
