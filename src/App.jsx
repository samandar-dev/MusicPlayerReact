
import { useEffect, useRef, useState } from 'react';
import Player from './companents/Control';
import Obj from './data'
import './App.scss';
import Menu from './companents/Menu';

function App() {
  const audioRef = useRef()
  const [menu, setMenu] = useState(false)
  const [music, setMusic] = useState(Obj())
  const [musicIndex, setMusicIndex] = useState(music[2])
  const [playPause, setPLayPause] = useState(false)
  const [randomMus, setRandomMus] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [timeObj, setTimeObj] = useState({
    currentTime: 0,
    duration: 0
  })

  const PlayPauseFuncHandler = () => {
    if (playPause == true) {
      audioRef.current.pause()
    }
    else {
      audioRef.current.play()
    }
    setPLayPause(!playPause)
  }

  return (
    <>
      <section className='player pla'>
        <div className="container">
          <Menu
            menu={menu}
            setMenu={setMenu}
            audioRef={audioRef}
            music={music}
            setMusicIndex={setMusicIndex}
            playPause={playPause}
            setPLayPause={setPLayPause}
          />
          <div className={`pla__inner  ${menu ? "openMenu" : ""}`}>
            <div className="pla__content placon">
              <div className="placon__img_box">
                <img src={musicIndex.cover} alt="img" />
              </div>
              <div className="control__names">
                <h3>{musicIndex.name}</h3>
                <p>{musicIndex.artist}</p>
              </div>
              <Player
                audioRef={audioRef}
                PlayPauseFuncHandler={PlayPauseFuncHandler}
                playPause={playPause}
                setPLayPause={setPLayPause}
                timeObj={timeObj}
                setTimeObj={setTimeObj}
                music={music}
                musicIndex={musicIndex}
                setMusicIndex={setMusicIndex}
                randomMus={randomMus}
                setRandomMus={setRandomMus}
                repeat={repeat}
                setRepeat={setRepeat}
              />
            </div>
            <button className='modalBtn' onClick={() => setMenu(!menu)}>Menu</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
