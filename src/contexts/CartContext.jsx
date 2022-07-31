import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider( {children} ) {
  const [cartItems, setCartItems] = useState([])

  return (
    <CartContext.Provider value={{cartItems}}>
      {children}
    </CartContext.Provider>
  )
}