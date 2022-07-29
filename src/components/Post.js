import React from "react";
import { Link } from "react-router-dom";

const detailPrice = () => {
  if (detailPrice.currency === null) {
    
  }
}

export const Post = ({ detailOrder, excerpt }) => (
  // <article className={excerpt ? 'detailOrder-excerpt' : 'detailOrder'}>
  //   <h2>{detailOrder.title}</h2>
  //   <p>{excerpt ? detailOrder.body.substring(0, 100) : detailOrder.body}</p>

  //   {excerpt && (
  //     <Link to={`/posts/${detailOrder.id}`} className="button">
  //       View Post
  //     </Link>
  //   )}
  // </article>

  <Link to={`/medications/9`}>
    <div className="cardDetail">
      <label
        className={
          (detailOrder.status === "Active" && "success-label") ||
          (detailOrder.status === "Prescription Rejected"
            ? "red-label"
            : "warning-label")
        }
      >
        {detailOrder.status}
      </label>
      <div className="name-date">
        <label>{detailOrder.full_name}</label>
        <label className="date">{detailOrder.updated_at}</label>
      </div>
      <div>
        <div>
          <h2>#{detailOrder.id}</h2>
        </div>
        {detailOrder.currency ? detailOrder.currency (
          detailOrder.currency 
        ): (
          '-'
        )}
        <div>
          <h2>{`${detailOrder.currency} ${detailOrder.total_price}`}</h2>
        </div>
      </div>
    </div>
  </Link>
);
