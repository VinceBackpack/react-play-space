import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { SearchFilter } from '../components/SearchFilter';
import { GetList, baseURL } from '../services/fetchAPI';
import { Property } from '../components/Property';
import { useSearchParams } from 'react-router-dom';
import './Search.css';

export const Search = () => {
    const [searchFilter, setSearchFilter] = useState(false);
    const [searchParams] = useSearchParams();

    const locationIds =
        searchParams.get('location_ids') || '6901,5003'; //Default location id

    const purpose =
        searchParams.get('purpose') || 'for-rent';

    const url =
        `${baseURL}/search-property` +
        `?sort_order=popular` +
        `&property_type=apartments,villas` +
        `&page=1` +
        `&langs=en` +
        `&location_ids=${locationIds}` +
        `&purpose=${purpose}`;

    const response = GetList(url);

    console.log('Search response:', response);

    // API is still loading
    if (!response) {
        return (
            <div className='search-page'>
                <NavBar />
                <main className='search-main'>
                    <div className='search-loading'>
                        Loading properties...
                    </div>
                </main>
            </div>
        );
    }

    // Get the actual property array
    const properties = response?.data?.properties || [];
    return (
        <div className='search-page'>
            <NavBar />
            <main className='search-main'>
                <section className='search-header'>
                    <div>
                        <p className='search-eyebrow'>
                            UAE REAL ESTATE
                        </p>
                        <h1>
                            {purpose === 'for-sale'
                                ? 'Properties for Sale'
                                : 'Properties for Rent'}
                        </h1>
                        <p className='search-description'>
                            Browse available properties and find your
                            next home.
                        </p>
                    </div>

                    <button
                        className='filter-button'
                        onClick={() =>
                            setSearchFilter(prev => !prev)
                        }
                    >
                        {searchFilter
                            ? 'Hide Filters'
                            : 'Filter Search'}
                    </button>
                </section>
                {searchFilter && (
                    <div className='filters-container'>
                        <SearchFilter />
                    </div>
                )}

                <section className='search-results'>

                    <div className='results-header'>
                        <h2>
                            Available Properties
                        </h2>
                        <span>
                            {properties.length} properties
                        </span>
                    </div>
                    <div className='property-grid'>
                        {properties.length > 0 ? (
                            properties.map((property) => (
                                <Property
                                    property={property}
                                    key={property.id}
                                />
                            ))
                        ) : (
                            <div className='no-properties'>
                                No properties found.
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};