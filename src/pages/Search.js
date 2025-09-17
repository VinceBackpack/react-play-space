import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { SearchFilters } from '../components/SearchFilter';
import { GetList, baseURL } from '../services/fetchAPI';
import { Property } from '../components/Property';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const [searchParams] = useSearchParams();
    
    const locationExternalIDs = searchParams.get("locationExternalIDs") || '5002%2C6020';
    const purpose = searchParams.get("purpose") || 'for-rent';
    const hitsPerPage = searchParams.get("hitsPerPage") || '25';

    const properties = GetList(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=${hitsPerPage}`);


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

                {propertiesLoaded()}

            </div>
            <div className='searchedDisplay' onClick={() => setSearchFilters((prevFilters)=> !prevFilters)}>
                Filter Search
            </div>
            
            { searchFilters && <SearchFilters /> }
        </div>
        </>
    );
}