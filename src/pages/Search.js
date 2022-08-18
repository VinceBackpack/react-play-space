import { useState } from 'react';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { SearchFilters } from '../components/SearchFilter';
import { GetList, baseURL } from '../services/fetchAPI';
import { Property } from '../components/Property';
import { useSearchParams } from 'react-router-dom';



export const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const [searchParams] = useSearchParams();
    
    //const properties = getServerSideProps( searchParams);
    
    const locationExternalIDs = searchParams.get("locationExternalIDs") || '5002%2C6020';
    const categoryExternalID = searchParams.get("categoryExternalID") || '4';
    const purpose = searchParams.get("purpose") || 'for-rent';
    const priceMin = searchParams.get("priceMin") || '0';
    const priceMax = searchParams.get("priceMa") || '1000000';
    const roomsMin = searchParams.get("roomsMin") || '1';
    const bathsMin = searchParams.get("bathsMin") || '1';
    const areaMax = searchParams.get("areaMax") || '35000';
    const rentFrequency = searchParams.get("rentFrequency") || 'yearly';
    const hitsPerPage = searchParams.get("hitsPerPage") || '25';

    const properties = GetList(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=${hitsPerPage}`);

    
    //const pur = new URLSearchParams(document.location.search);
    console.log("pur: " + searchParams);
    // const properties = async () =>{
    //     const { prop } = await getServerSideProps();
    //     setProperty(prop);
    // }
    //console.log(JSON.stringify(properties?.hits, '', 2));
    //const property = JSON.stringify(properties, '', 2)
    //console.log("hellos " + JSON.parse(properties));
    //const property = JSON.parse(properties, '', 2)
    //console.log("hellos " + properties);
    //this.state.properties.map((item) => {item.title})
    // const obj = { purpose: "for-rent", title: "title here"}


    const propertiesLoaded = () => {
        if(properties.length === 0){
            return (<div> Loading Data </div>)
        }
        else{
            return (Object.keys(properties?.hits).map((item, key) => <Property property={ Object(properties?.hits[item])} key={key} /> ));
        }

    }
    
    if(!properties){
        return (<p> Loading... </p>);
    }

    return (
        <>
        <div>
            <NavBar/>
            <h1>Search</h1>
            {/* <GetList /> */}
            <div style={{ display:'flex', flexWrap: 'wrap' , padding: '5% 5% 5% 5%'}}>
                
                
                    {/* Working */}
                {/* { Object.keys(properties?.hits).map((item, key) => <Property property={ Object(properties?.hits[item])} key={key} /> )} */}

                {propertiesLoaded()}

            </div>
            {/* { properties.map((property) => <Property property={property} key={property.id} /> )} */}
            <div className='searchedDisplay' onClick={() => setSearchFilters((prevFilters)=> !prevFilters)}>
                Filter Search
            </div>
            
            
            { searchFilters && <SearchFilters /> }
        </div>
        </>
    );
}