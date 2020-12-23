import React from 'react'
import { useHistory } from 'react-router-dom'
import './Card.scss'

function Card({ data }) {
  const history = useHistory()
  return (
    <>
      <div
        className="itemWrapper"
        onClick={() => history.push(`/contents/${data.id}`)}
      >
        <div className="cardTitle">{data.title}</div>
      </div>
    </>
  )
}

export default Card
