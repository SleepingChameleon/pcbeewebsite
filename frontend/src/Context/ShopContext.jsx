import {createContext} from 'react'
import { products } from '../assets/assets';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const deliver_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products, currency, deliver_fee,
    search,setSearch,showSearch,setShowSearch
  }
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;