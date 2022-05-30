import React from 'react'
import Obj from '../data'

function Menu({
  menu, setMenu, playPause, music,
  setMusicIndex, audioRef, setPLayPause,
}) {
  const MusicItemsHandler = (e) => {
    let id = Math.floor(e.target.id)
    setMusicIndex(music[id])
    console.log(audioRef.current.play());
    const audioplay = audioRef.current.play()
    audioplay.then(() => (
      audioRef.current.play()
    ))
    setPLayPause(true)
  }

  return (
    <>
      <div className={`pla__menu menu  ${menu ? "menusOpen" : ""}`}>
        <ul className="menu__list">
          {Obj().map((obj, i) => (
            <li className="menu__item" onClick={MusicItemsHandler} key={i + 1} id={i}>
              <img src={obj.cover} alt="musicimg" id={i} />
              <div id={i}>
                <h3 className='menu__music_name' id={i}>{obj.name}</h3>
                <p className='menu__user_name' id={i}>{obj.artist}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Menu
