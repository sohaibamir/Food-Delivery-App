import {createContext, useState} from 'react';
import foods from './data/foods';
import menu from './data/menu';
import restaurants from './data/restaurants';
import shops from './data/shops';

const DataContext = createContext('DataContext');

const ContextProvider = props => {
  const [cart, setCart] = useState([]);

  const getIndex = (items, foodId) =>
    items.findIndex(item => item.id === foodId);

  const addToCart = food => {
    const index = cart.findIndex(item => item.id === food.id);
    if (index !== -1) return;
    food.quantity = 1;
    setCart(oldCart => [food, ...oldCart]);
  };

  const deleteFromCart = foodId => {
    setCart(oldCart => oldCart.filter(item => item.id !== foodId));
  };

  const value = {
    restaurants,
    shops,
    foods,
    menu,
    addToCart,
    deleteFromCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default ContextProvider;
