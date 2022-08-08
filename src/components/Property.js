
export const Property = ({ property: { purpose, title, coverPhoto, price, rentFrequency, rooms, baths, area, furnishingStatus }}) => (
    <div style={{display: "flex" , width:"100%", height:"100%"}}>
        <div style={{ width:"400px"}}>
            <img src={coverPhoto.url} width={250} height={250}/>
            <h1> { title } </h1>
            <h2> { purpose } </h2>
            <h3> { price }</h3>
        </div>
    </div>
);

