import { Link } from 'react-router-dom';

export const Banner = ({purpose, title, desc, buttonText, linkName, imageUrl}) => {
    return (
    
    <div style={{ display: 'flex', height:'100%', width: '40%', alignItems:'center', alignContent: 'center' }}>
      <img src = {imageUrl} width={500} height={500} alt="banner"/>
      <div style={{ padding: '0px 5% 0px 10%' }}>
        <h1>{purpose}</h1>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>
          <Link to={linkName}>{buttonText} </Link>
        </button>
      </div>
    </div>
    
    );
}
