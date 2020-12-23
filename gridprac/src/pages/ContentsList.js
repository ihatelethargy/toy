import React, { useEffect, useState } from 'react'
import Card from '../component/card/Card'
import api from '../lib/api/api'
import './ContentsList.scss'

function ContentsList() {
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

  switch (contents.status) {
    case 'idle':
      return <>idle</>
    case 'pending':
      return <>loading,,,,</>
    case 'rejected':
      return <>404</>
    case 'resolved':
    default:
      return (
        <div className="cardsWrapper">
          <div className="cardWrapper">
            {contents.tests.map((item, index) => {
              return <Card key={`card-${index}`} data={item} />
            })}
          </div>
        </div>
      )
  }
}

export default ContentsList
