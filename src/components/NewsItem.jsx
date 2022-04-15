import React from "react";
import "../css/Style.css";
const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date, Source } = props;
  return (
    <div className="my-3 shubh">
      <div className="card">
        <span
          className="badge rounded-pill bg-danger"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          {Source}
        </span>
      </div>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body ">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">
          <small className="text-muted">
            By {author} on {new Date(date).toGMTString()}
          </small>
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn d-flex justify-content-center mx-auto btn-sm btn-light"
          style={{ width: "150px" }}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
