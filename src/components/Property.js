
export const Property = ({ property: { purpose, title, coverPhoto, price, rentFrequency, rooms, baths, area, furnishingStatus }}) => (
    <div>
        <div style={{ width:"400px"}}>
            <img src={coverPhoto.url} width={250} height={250} alt="no image"/>
            <h1> { title } </h1>
            <h2> { purpose } </h2>
            <h3> { price }</h3>
        </div>
    </div>
);

