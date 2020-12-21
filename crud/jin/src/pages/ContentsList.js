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
                return <Card key={`Card + ${index}`} data={item} />
              })}
              <div className="create-card"></div>
            </div>
          </div>
        </>
      )
  }
}

export default ContentsList
