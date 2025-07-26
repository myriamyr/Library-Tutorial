import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";
import { useParams } from "react-router";
import BestBooks from "../components/ui/BestBooks";


const BookInfo = ({ books, addItemToCart }) => {
    const { id } = useParams();
    const book = books.find((book) => +book.id === +id);


    return (
        <div id="books__body">
           <main id="books__main">
             <div className="books__container">
                  <div className="row">
                     <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                          <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to="/books" className="book__link">
                         <h2 className="book__selected--title--top">Books</h2>
                        </Link>
                     </div> 
                     <div className="book__selected">
                        <figure className="book__selected--figure">
                          <img className="book__selected--img" src={book.url} alt="" />   
                        </figure>
                        <div className="book__selected--description">
                         <h2 className="book__selected--title">{book.title}</h2>
                         <Ratings rating={book.rating} />
                         <div className="book__selected--price">
                           <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />  
                        </div> 
                        <div className="book__summary">
                          <h3 className="book__summary--title">
                            Summary
                          </h3>
                          <p className="book__summary--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi itaque obcaecati beatae perferendis dolore esse temporibus dolorum odio expedita, architecto quibusdam, voluptatibus deleniti hic optio, facere neque distinctio voluptates.
                          </p>  
                          <p className="book__summary--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi itaque obcaecati beatae perferendis dolore esse temporibus dolorum odio expedita, architecto quibusdam, voluptatibus deleniti hic optio, facere neque distinctio voluptates.
                          </p>  
                        </div>

                        <button className="btn" onClick={() => addItemToCart(book)}>
                           Add to Cart 
                        </button>
                  
                        </div>
                    </div>  
                  </div>
               </div>

               <div className="books__container">
                <div className="row">
                  <div className="book__selected--top">
                    <h2 className="book__selected--title--top">Recommended Books</h2>
                  </div>
                 <BestBooks id={id} />
                </div>
               </div>
            </main> 
        </div>

    );
};

export default BookInfo;