import basketImg from "../assets/ecomm-bag-icon.svg";
import starImg from "../assets/review-star.svg";

function Stars({ qty }) {
  return [...Array(qty)].map((e, i) => (
    <img
      key={i}
      className="cs-star"
      src={starImg}
      alt="star"
      height="24"
      width="24"
      loading="lazy"
      decoding="async"
    />
  ));
}

export default function Item({
  image,
  title,
  category,
  price,
  wasPrice,
  discount,
  stars,
}) {
  return (
    <div className="cs-item">
      <a href="" className="cs-link">        
        <div className="cs-picture-group">
          <picture className="cs-picture">
            <img src={image} className="cs-picture" />          
          </picture>          
          {discount ? <span className="cs-offer">-{discount}%</span> : null}
        </div>
        <div className="cs-details">
          <span className="cs-category">{category}</span>
          <h3 className="cs-name">{title}</h3>
          <div className="cs-actions">
            <div className="cs-flex">
              <span className="cs-price">${price} </span>
              <span className="cs-was-price">${wasPrice}</span>
              <div className="cs-stars"></div>
              <Stars qty={stars} />
            </div>
            <button className="cs-buy">
              <img src={basketImg} className="cs-basket" />
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
