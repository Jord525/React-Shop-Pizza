import React from 'react';
import { Link } from 'react-router-dom';

const CardEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пустая </h2>
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CardEmpty;
