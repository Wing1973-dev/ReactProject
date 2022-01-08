import React from 'react';

const Booksitem = (props) => {
    return (
        <div className="books_item">
            <div className="books_image">
                <img src={props.book.img} alt={props.book.altimg} />
            </div>
            <div className="books_name">{props.book.name}</div>
            <a href="" className="books_button">{props.book.button}</a>
        </div>
    );
};

export default Booksitem;