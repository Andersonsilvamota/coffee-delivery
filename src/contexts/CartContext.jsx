import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider( {children} ) {
  const [cartItems, setCartItems] = useState([])

  function addCoffeeToCart(coffee) {

    console.log(coffee)
    const copyCoffeesCart = [...cartItems]

    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)
    if(coffeeAlreadyExistsInCart < 0) {
      copyCoffeesCart.push(coffee)
    } else {
      coffeeAlreadyExistsInCart.quantity + coffee.quantity
    }

    setCartItems(copyCoffeesCart)
    console.log("entoru:> ", copyCoffeesCart)
  }
  console.log("carrrinho======",cartItems)
  return (
    <CartContext.Provider value={{cartItems, addCoffeeToCart}}>
      {children}
    </CartContext.Provider>
  )
}