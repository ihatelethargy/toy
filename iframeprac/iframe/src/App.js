import React, { useState } from 'react'
import './App.css'
// uR8Mrt1IpXg

export default function App() {
  const [time, setTime] = useState(null)
  const [id, setId] = useState(null)
  const [play, setPlay] = useState(false)
  const [isSumbit, SetIsSubmit] = useState(false)
  // const url = play
  //   ? `https://www.youtube.com/embed/uR8Mrt1IpXg?autoplay=1;start=${time}`
  //   : `https://www.youtube.com/embed/uR8Mrt1IpXg`
  const url = play
    ? `https://www.youtube.com/embed/${id}?autoplay=1;start=${time}`
    : `https://www.youtube.com/embed/${id}`

  const timeHandler = e => {
    const data = e.target.value
    console.log(data)
    setTime(e.target.value)
  }

  const idHandler = e => {
    setId(e.target.value.slice(-11))
  }

  const submitHandler = e => {
    e.preventDefault()
    SetIsSubmit(true)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler} id="searchForm">
        <input
          type="text"
          placeholder="유튜브영상 주소를 입력하세요"
          onChange={idHandler}
        />
        <input
          type="text"
          placeholder="시작시간을 입력하세요"
          onChange={timeHandler}
        />
      </form>

      {isSumbit ? (
        <>
          <iframe
            className="rsvideo"
            width="560"
            height="315"
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="buttonBox">
            <button
              onClick={() => {
                // setTime(24)
                setPlay(true)
                setTimeout(() => setPlay(false), 3000)
              }}
            >
              1 초
            </button>
            <button
              onClick={() => {
                // setTime(24)
                setPlay(true)
                setTimeout(() => setPlay(false), 4000)
              }}
            >
              3 초
            </button>
          </div>
        </>
      ) : (
        <div className="intro">유튜브 링크와 원하는 시작시간을 입력하세요</div>
      )}
      <button type="submit" form="searchForm">
        입력
      </button>
    </div>
  )
}
