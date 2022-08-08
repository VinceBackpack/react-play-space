import { useState } from 'react';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { SearchFilters } from '../components/SearchFilter';
import { GetList, baseURL } from '../services/fetchAPI';
import { Property } from '../components/Property';
import { getByTitle } from '@testing-library/react';



export const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    //const [property, setProperty] = useState();
    
    const properties = getServerSideProps();
    
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

    if(properties){
        return <p> Loading... </p>
    }
    return (
        <>
        <div>
            <NavBar/>
            <h1>Search</h1>
            {/* <GetList /> */}
            <div>
                properties
                <p>
                    {/* Working */}
                { Object.keys(properties?.hits).map((item, key) => <Property property={ Object(properties?.hits[item])} key={key} /> )}

                {/* {properties} */}

                {/* { Object.keys(properties).map((prop) => { return (<Property property={prop} keys={prop.id} />)})} */}



                {/* { Object.keys(properties?.hits).map((item) => <Property property={ Object(properties?.hits[item])} key={properties?.hits} /> )} */}

                

                {/* <Property property={ Object(properties?.hits[0])} key={properties?.hits} /> */}

                {/* {<Property property={obj} keys={obj.id}/>} */}

                </p>
                {/* { Object.values(properties).map((property) => {
                    return (
                    <p> {property.map ((items) => {
                        return (
                            <p>{items.id} </p>
                        )
                    })} </p> )
                })} */}
                

                {/* { Array.isArray(properties) ? properties.map((property) => <Property property={property} key={property.id} /> ) : null } */}

                {/* <div>
                    {Array.isArray(JSON.stringify(properties)) ? properties.map((property, index) => {
                    return (
                    <div key={index}>
                        <h2>name: {property.coverPhoto}</h2>
                        {console.log("cover photo: " + property.value) }
                        <h2>country: {property.id}</h2>

                        
                        </div>
                        );
                    }): "properties null" }
                </div> */}
                

                {/* {properties.map((item, index) =>  <p>Purpose:  {item}</p>)} */}
                
                {/* <Property title={JSON.stringify(properties.props.properties)}/> */}
                {/* {properties.map((properties) => properties) } */}
            </div>
            {/* { properties.map((property) => <Property property={property} key={property.id} /> )} */}
            <div className='searchedDisplay' onClick={() => setSearchFilters((prevFilters)=> !prevFilters)}>
                Filter Search
            </div>
            {/* { properties.length === 0 && (
                <img src='/'/>
            )} */}
            { searchFilters && <SearchFilters /> }
        </div>
        </>
    );
}

//  function getServerSideProps({ query }){
//     const locationExternalIDs = query.locationExternalIDs || '5002%2C6020';
//     const categoryExternalID = query.categoryExternalID || '4';
//     const purpose = query.purpose || 'for-rent';
//     const priceMin = query.priceMin || '0';
//     const priceMax = query.priceMax || '1000000';
//     const roomsMin = query.roomsMin || '1';
//     const bathsMin = query.bathsMin || '1';
//     const areaMax = query.areaMax || '35000';
//     const rentFrequency = query.rentFrequency || 'yearly';
//     const hitsPerPage = query.hitsPerPage || '25';

function getServerSideProps() {
    const locationExternalIDs = '5002';
    const categoryExternalID = '4';
    const purpose = 'for-rent';
    const priceMin = '0';
    const priceMax = '1000000';
    const roomsMin = '1';
    const bathsMin =  '1';
    const areaMax = '35000';
    const rentFrequency =  'yearly';
    const hitsPerPage = '6';
    
    const data = GetList(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=${hitsPerPage}`);
    
    // if(!data){
    //     console.log("empty: " + data);
    // }
//console.log("before return search: " + JSON.stringify(data), null, 2);


return data;
// return {
//     props: {
//         properties: data?.hits
//     }
// };
}