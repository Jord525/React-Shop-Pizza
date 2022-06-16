import React from 'react';

function Categories({ value, onClickCategory }) {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}
            key={index}
          >
            {' '}
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
