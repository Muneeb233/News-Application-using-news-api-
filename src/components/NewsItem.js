
import React, { Component } from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date } = props
  return (
    <div>
      <div className="card " style={{ width: ' 18rem' }}>
        <img src={imageUrl} className="card-img-top" alt=". .." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
