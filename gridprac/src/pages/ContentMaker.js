import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../component/header/Header'
import api from '../lib/api/api'
import './ContentMaker.scss'

function ContentMaker() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [start, setStart] = useState(null)

  const [contents, setContents] = useState({
    status: 'idle',
    tests: null,
  })

  useEffect(() => {
    ;(async () => {
      try {
        const result = await api.getTestsApi()

        setContents({
          status: 'pending',
          tests: null,
        })

        setContents({
          status: 'resolved',
          tests: result,
        })
      } catch (e) {
        setContents({
          status: 'rejected',
          tests: null,
        })
      }
    })()
  }, [])

  const onClickFunc = async evt => {
    const body = {
      title: title,
      description: '',
      contentUrl: link,
      hashtag: '',
      start: start,
      comment: '',
    }
    try {
      await api.createTest(body)
      setContents({
        status: 'resolved',
        contents: [...contents.tests, body],
      })
    } catch (e) {}
    history.push('/contents')
  }

  const changeHandler = e => {
    if (e.target.name === 'title') setTitle(e.target.value)
    else if (e.target.name === 'link') setLink(e.target.value)
    else if (e.target.name === 'start') setStart(e.target.value)
  }

  return (
    <>
      <div className="makerWrapper">
        <form>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            name="title"
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="유튜브 링크를입력하세요"
            name="link"
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="시작시간을 입력하세요"
            name="start"
            onChange={changeHandler}
          />
        </form>
        <button onClick={onClickFunc}>생성하기</button>
      </div>
    </>
  )
}

export default ContentMaker
