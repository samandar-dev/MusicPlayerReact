import React from 'react'
import Obj from '../data';

import './Player.scss'

function Player({
  audioRef, PlayPauseFuncHandler,
  playPause, setPLayPause,
  timeObj, setTimeObj, musicIndex,
  randomMus, setRandomMus,
  repeat, setRepeat, setMusicIndex, music,
}) {
  const getTimeFunc = (time) => {
    if (time) {
      return (
        Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
      )
    } else {
      return '0:00'
    }
  }
  const rangeFunc = (e) => {
    audioRef.current.currentTime = e.target.value
    setTimeObj({
      ...timeObj,
      currentTime: e.target.value,
    })
  }
  const updateTime = (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setTimeObj({
      ...timeObj,
      currentTime: currentTime,
      duration: duration
    })
  }

  const nextBtnFunc = () => {
    if (randomMus) {
      setMusicIndex(music[3])
      const audioplay = audioRef.current.play()
      audioplay.then(() => (
        audioRef.current.play()
      ))
      setPLayPause(true)
    }
  }

  const previBtnFunc = () => {
    if (repeat) {
      setMusicIndex(music[3])
      const audioplay = audioRef.current.play()
      audioplay.then(() => (
        audioRef.current.play()
      ))
      setPLayPause(true)
    }
  }

  return (
    <>
      <div className="placon__control_box control">
        <div className="control__time_range_box">
          <div className="control__time_box">
            <p className="control__time-left">{getTimeFunc(timeObj.currentTime)}</p>
            <p className="control__time-right">{getTimeFunc(timeObj.duration)}</p>
          </div>
          <div className="control__range_box">
            <input onChange={rangeFunc} min={0} value={timeObj.currentTime} max={timeObj.duration} type="range" name="range" id="control__ragne" />
            <audio onTimeUpdate={updateTime} ref={audioRef} src={musicIndex.audio}></audio>
          </div>
        </div>
        <div className="control__btn_box">
          <button className='control__left_btn' onClick={() => setRandomMus(!randomMus)}>
            {randomMus ? <i className='bx bx-shuffle'></i> : <span className="icon-transfer"></span>}
          </button>
          <div className="control__center_btns">
            <button className='control__previous' onClick={previBtnFunc}>
              <i className='bx bx-skip-previous'></i>
            </button>
            <button className='control__play_pause' onClick={PlayPauseFuncHandler}>
              {playPause ? <i className='bx bx-pause-circle' ></i> : <i className='bx bx-play-circle'></i>}
            </button>
            <button className='control__next' onClick={nextBtnFunc}>
              <i className='bx bx-skip-next'></i>
            </button>
          </div>
          <button className='control__right_btn' onClick={() => setRepeat(!repeat)}>
            {repeat ? <span className="icon-repeat"></span> : <span className="icon-repeat_one"></span>}
          </button>
        </div>
      </div>
    </>
  )
}

export default Player
