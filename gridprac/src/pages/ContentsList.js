import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../component/card/Card'
import api from '../lib/api/api'
import './ContentsList.scss'

function ContentsList() {
  const history = useHistory()
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

  const onDelete = async id => {
    try {
      const result = await api.deleteTest(id)
      setContents({
        status: 'resolved',
        tests: contents.tests.filter(item => {
          return item.id !== id
        }),
      })
    } catch (e) {}
  }

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
            <div
              className="newCard"
              onClick={() => history.push('/newcontent')}
            >
              +
            </div>
            {contents.tests.map((item, index) => {
              return (
                <Card key={`card-${index}`} data={item} onDelete={onDelete} />
              )
            })}
          </div>
        </div>
      )
  }
}

export default ContentsList
