import React, { useState } from 'react'

function Home() {
  const [text, setText] = useState('')
  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(text)
  }
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul></ul>
    </>
  )
}

export default Home
