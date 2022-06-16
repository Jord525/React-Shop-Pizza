import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setCategotyId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/index';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [fetchItems, setFetchItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [curentPage, setCurentPage] = React.useState(1);

  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filterReducer.categoryId);
  const sortType = useSelector((state) => state.filterReducer.sort.sort);

  const onChangeCategory = (id) => {
    dispatch(setCategotyId(id));
  };
  React.useEffect(() => {
    setLoading(true);
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    console.log(sortType);
    axios
      .get(
        `https://62a45a0f259aba8e10e6cc3b.mockapi.io/iteams?page=${curentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setFetchItems(res.data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, curentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : fetchItems.map((value) => <PizzaBlock {...value} key={value.id} />)}
      </div>
      <Pagination onChangePage={(number) => setCurentPage(number)} />
    </div>
  );
};
export default Home;
