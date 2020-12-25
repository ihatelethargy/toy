import CloseOutlined from '@ant-design/icons/CloseOutlined'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './Card.scss'

function Card({ data, onDelete }) {
  const history = useHistory()
  const onDeleteFunc = evt => {
    evt.stopPropagation()
    onDelete(data.id)
  }
  return (
    <>
      <div
        className="itemWrapper"
        onClick={() => history.push(`/contents/${data.id}`)}
      >
        <div className="cardTitle">{data.title}</div>
        <div className="closeIcon" onClick={onDeleteFunc}>
          <CloseOutlined />
        </div>
      </div>
    </>
  )
}

export default Card
