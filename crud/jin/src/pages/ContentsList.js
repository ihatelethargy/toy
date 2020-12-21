import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import Loading from '../components/loading/Loading'
import api from '../lib/api/api'
import './ContentsList.scss'

function ContentsList() {
  const [contents, setContents] = useState({
    status: 'idle',
    contents: null,
  })

  useEffect(() => {
    ;(async () => {
      try {
        const result = await api.getContentsAPI()
        setContents({
          status: 'pending',
          contents: null,
        })

        setContents({
          status: 'resolved',
          contents: result,
        })
      } catch (e) {
        setContents({
          status: 'rejected',
          contents: null,
        })
      }
    })()
  }, [])

  switch (contents.status) {
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
            {contents.contents.map((item, index) => {
              return <Card key={`Card + ${index}`} />
            })}
          </div>
          <div className="create-card"></div>
        </>
      )
  }
}

export default ContentsList
