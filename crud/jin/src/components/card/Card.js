import React from 'react'
import { useHistory } from 'react-router-dom'
import './Card.scss'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import api from '../../lib/api/api'

function Card({ data, onDelete }) {
  const history = useHistory()

  const onClickFunc = async evt => {
    evt.stopPropagation()
    try {
      await api.deleteContent(data.id)
      onDelete(data.id)
    } catch (e) {}
  }

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
        <div className="card__content__text">
          <span className="card__content__title">{data.title}</span>
          <span className="card__content__desc">{data.description}</span>
        </div>

        <span className="card__content__hashtag">
          {data.hashtag}
          <span className="delBtn" onClick={onClickFunc}>
            <DeleteOutlined />
          </span>
        </span>
      </div>
    </>
  )
}

export default Card
