import React, { useState } from 'react'
import api from '../lib/api/api'
import './ContentDetail.scss'

function ContentDetail({ match }) {
  const [play, setPlay] = useState(false)
  const [id, setId] = useState(null)
  const [time, setTime] = useState(null)
  const url = play
    ? `https://www.youtube.com/embed/${id}?autoplay=1;start=${time}`
    : `https://www.youtube.com/embed/${id}`

  const [testData, setTestData] = useState({
    status: 'idle',
    test: null,
  })

  useState(() => {
    ;(async () => {
      try {
        const result = await api.getTestApi(match.params.id)
        setTestData({
          status: 'pending',
          test: null,
        })
        setTestData({
          status: 'resolved',
          test: result,
        })
      } catch (e) {
        setTestData({
          status: 'rejected',
          test: null,
        })
      }
    })()
  }, [match.params.id])

  switch (testData.status) {
    case 'idle':
      return <>idle</>
    case 'pending':
      return <>pending</>
    case 'rejected':
      return <>404</>
    case 'resolved':
    default:
      return (
        <div className="detailWrapper">
          <div className="contentWrapper">
            <span className="title">{testData.test.title}</span>
            <div className="iframeWrapper">
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
                    setTime(testData.test.start)
                    setId(testData.test.contentUrl.slice(-11))
                    setPlay(true)
                    setTimeout(() => setPlay(false), 2000)
                  }}
                >
                  1 초
                </button>
                <button
                  onClick={() => {
                    setTime(testData.test.start)
                    setId(testData.test.contentUrl.slice(-11))
                    setPlay(true)
                    setTimeout(() => setPlay(false), 4000)
                  }}
                >
                  3 초
                </button>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default ContentDetail
