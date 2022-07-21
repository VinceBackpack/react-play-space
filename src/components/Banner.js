export const Banner = ({purpose, title, desc, buttonText, linkName, imageUrl}) => {
    return (
    <div>
      <img src = {imageUrl} width={500} height={500} alt="banner"/>
      <h1>{purpose}</h1>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button onClick={linkName}>{buttonText}</button>
    </div>
    );
}
