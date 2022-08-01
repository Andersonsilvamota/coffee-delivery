import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider( {children} ) {
  const [cartItems, setCartItems] = useState([])

  function addCoffeeToCart(coffee) {
    const copyCoffeesCart = [...cartItems]

    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)
    
    if(coffeeAlreadyExistsInCart < 0) {
      copyCoffeesCart.push(coffee)
    } else {
      copyCoffeesCart[coffeeAlreadyExistsInCart].quantity = copyCoffeesCart[coffeeAlreadyExistsInCart].quantity + coffee.quantity
    }

    setCartItems(copyCoffeesCart)
  }
  
  return (
    <CartContext.Provider value={{cartItems, addCoffeeToCart}}>
      {children}
    </CartContext.Provider>
  )
}