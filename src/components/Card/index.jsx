import React, { memo } from 'react'
import moment from 'moment'
import './style.css'

const Card = ({ post, handleRead, handleDismiss }) => (
  <div className='card'>
    <div className='card-header'>
      {!post.visited && <span className='card__unvisited' />}
      <span className='card-header__author'>{post.author}</span>
      <span className='card-header__date'>
        {moment(new Date(post.created_utc * 1000)).fromNow()}
      </span>
    </div>
    <div className='card-content'>
      <div className='card-content__tumbnail'>
        {post.thumbnail && <img src={post.thumbnail} />}
        <p
          className={
            post.thumbnail
              ? 'card-content__title'
              : 'card-content__title no-image'
          }
          onClick={() => handleRead(post.id)}
        >
          {post.title}
        </p>
      </div>
      <span className='card-content__arrow' onClick={() => handleRead(post.id)} />
    </div>
    <div className='card-footer'>
      <div className='card-footer-container__dismiss' onClick={() => handleDismiss(post.id)}>
        <span className='card-footer-button__dismiss' />
        <span>Dismiss post</span>
      </div>
      <span className='card-footer__comments'>{`${
        post.num_comments
      } comments`}</span>
    </div>
  </div>
)

export default memo(Card)
