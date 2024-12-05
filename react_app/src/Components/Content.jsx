import './Content.css';

export default function Content() {
  const data = [
    { id: 1, img: "/Liked.png", title: 'Liked Songs' },
    { id: 2, img: "/image4.png", title: 'Neffex Playlist' },
    { id: 3, img: "/image3.png", title: 'K/DA' },
    { id: 4, img: "/image5.png", title: 'kalpan' },
  ];
const datatwo=[
      { id: 1, img: "/image9.png", title: 'Weekly Motivation' },
    { id: 2, img: "/image7.png", title: 'Meditation Self' },
    { id: 3, img: "/image10.png", title: 'Words Beyond Actions' } ,
    { id: 4, img: "../../public/image9.png", title: 'The Alexa Show' }  ,
    { id: 5, img: "/image8.png", title: 'Motivation Daily' }   
]
  return (
    <div className="content">
      <div>
        <img src="/top-arrow-navigation.png" alt="Top Navigation" className="firstpic" />
        <img src="/User.png" alt="User" className="secondpic" />
      </div>
      <h1 className="secrowh">Good Morning</h1>
      <div className="secondrow">
<div className="liked-songs-container">
{data.map((detail) => (
          <div className="liked-song-item" key={detail.id}>
            <img src={detail.img} alt={detail.title} className="liked-song-image" />
            <p className="liked-song-text">{detail.title}</p>
          </div>
        ))}
</div>
      </div>
      <h2 className="syml">Shows you might like</h2>
      <div className="fourthrow">
        {datatwo.map((detail)=>{
            return(
            <div  key={detail.id} className="box-1" >
              <img src={detail.img} alt={detail.title} />
              <div>{detail.title}</div>
            </div>
            )   
        })}
      </div>
    </div>
  );
}
