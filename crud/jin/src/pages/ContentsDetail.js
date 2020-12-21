import { createFactory, useEffect, useState } from 'react'
import React from 'react'
import './ContentsDetail.scss'
import api from '../lib/api/api'
import Loading from '../components/loading/Loading'

function ContentsDetail({ history, match }) {
  const [contentState, setContentState] = useState({
    status: 'idle',
    content: null,
  })

  useEffect(() => {
    ;(async () => {
      try {
        const result = await api.getContentAPI(match.params.id)
        setContentState({
          status: 'pending',
          content: null,
        })

        setContentState({
          status: 'resolved',
          content: result,
        })
        console.log(result, 'thisis result')
      } catch (e) {
        setContentState({
          status: 'rejected',
          content: null,
        })
      }
    })()
  }, [match.params.id])

  const onChangeInput = async evt => {
    const { name, value } = evt.target
    try {
      await api.updateContent(match.params.id, {
        ...contentState.content,
        [name]: value,
      })
      setContentState({
        status: 'resolved',
        content: {
          ...contentState.content,
          [name]: value,
        },
      })
    } catch (e) {}
  }

  switch (contentState.status) {
    case 'idle':
      return <>idle</>
    case 'pending':
      return <Loading />
    case 'rejected':
      return <>404</>

    case 'resolved':
    default:
      return (
        <>
          <div className="detail-wrapper">
            <span className="detail-title">{contentState.content.title}</span>
            <img
              src={contentState.content.contentUrl}
              alt="detail-img"
              className="detail-img"
            />
            <span className="desc">{contentState.content.description}</span>
            <input
              type="text"
              className="detail-comment"
              name="comment"
              value={contentState.content.comment}
              onChange={onChangeInput}
            />
          </div>
        </>
      )
  }

  return <div>Contents Detail</div>
}

export default ContentsDetail
