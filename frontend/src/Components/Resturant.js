import React from 'react'
import './Resturant.css'


/*  Resturant components represents (image + details of that resturant)
    Each resturant component is viewable as individual card
    Props (resturants) is passed from App component
*/

const Resturant = ({resturant}) => {
    let {blurhash, currency, delivery_price, description, image, name, tags} = resturant
    delivery_price = delivery_price/100;

    return(
      <section className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mx-auto resturant">
          <div className="resturant-image">
              <img src={image} alt={name}/>
           </div>
           <div className="resturant-info">
              <h2 className="resturant-title">{name}</h2>
              <p className="resturant-description">{description}
              <br/>
                  {/* <p className="resturant-tags"> */}
                            {tags.map(tag =>  <small className="resturant-tags"> # {tag} </small>)}
                   {/* </p> */}
              </p>
              <p className="resturant-blurhash">Blurhash Data : <br/> {blurhash}</p>  
              <p className="resturant-delivery"><strong>Delivery price {currency === 'EUR' ? '€' : currency} {delivery_price}</strong></p>
           </div>
      </section>
    )
}
  
export default Resturant