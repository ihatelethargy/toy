import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import Loading from '../components/loading/Loading'
import api from '../lib/api/api'
import './ContentsList.scss'

function ContentsList() {
  const [contentsState, setContentsState] = useState({
    status: 'idle',
    contents: null,
  })

  useEffect(() => {
    ;(async () => {
      try {
        const result = await api.getContentsAPI()
        setContentsState({
          status: 'pending',
          contents: null,
        })

        setContentsState({
          status: 'resolved',
          contents: result,
        })
      } catch (e) {
        setContentsState({
          status: 'rejected',
          contents: null,
        })
      }
    })()
  }, [])

  const onClickFunc = async evt => {
    const body = {
      title: 'New Contents',
      description: '새로운 컨텐츠',
      contentUrl:
        'https://www.kindpng.com/picc/m/454-4542049_ink-question-mark-zen-ish-calligraphy-hd-png.png',
      hashtag: 'UX',
      icon: '',
      comment: 'Leave a comment...',
    }
    try {
      await api.createContent(body)
      setContentsState({
        status: 'resolved',
        contents: [...contentsState.contents, body],
      })
    } catch (e) {}
  }

  const onDelete = id => {
    setContentsState({
      status: 'resolved',
      contents: contentsState.contents.filter(item => item.id !== id),
    })
  }

  switch (contentsState.status) {
    case 'idle':
      return <>idle</>
    case 'pending':
      return <Loading />
    case 'rejected':
      return <>rejected...404</>
    case 'resolved':
    default:
      return (
        <>
          <div className="contentsListWrapper">
            <div className="contentsCardWrapper">
              {contentsState.contents.map((item, index) => {
                return (
                  <Card
                    key={`Card + ${index}`}
                    data={item}
                    onDelete={onDelete}
                  />
                )
              })}
              <div className="create-card" onClick={onClickFunc}></div>
            </div>
          </div>
        </>
      )
  }
}

export default ContentsList
