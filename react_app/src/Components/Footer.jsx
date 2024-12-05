import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
    <div className="playline">
      <div className="song-item">
        <img src="./public/image3.png" alt="Song" className="song-image" />
        <div className="song-info">
          <p className="song-title">Dreaming On</p>
          <p className="song-artist">NEFFEX</p>
        </div>
      </div>

     
      <div className="middle-item">
        <img src="./public/Music Player Options.png" alt="Middle Image" className="middle-image" />
      </div>

      
      <div className="end-item">
        <img src="./public/Right options.png" alt="End Image" className="end-image" />
      </div>
    </div>
  </div>

  )
}
