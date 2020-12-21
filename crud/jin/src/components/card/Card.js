import React from 'react'
import { useHistory } from 'react-router-dom'
import './Card.scss'

function Card({ data }) {
  const history = useHistory()

  return (
    <>
      <div
        className="cardWrapper"
        onClick={() => history.push(`/contents/${data.id}`)}
      >
        <img
          src={data.contentUrl}
          alt="cardImg"
          className="card__content__img"
        />
        <span className="card__content__title">{data.title}</span>
        <span className="card__content__desc">{data.description}</span>
        <span className="card__content__hashtag">{data.hashtag}</span>
      </div>
    </>
  )
}

export default Card
