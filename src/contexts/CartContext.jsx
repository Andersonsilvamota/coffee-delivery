import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider( {children} ) {
  const [cartItems, setCartItems] = useState([])
  const quantityInCart = cartItems.length

  function changeQuantity(coffee, name){
    const copyCoffeesCart = [...cartItems]

    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)
    console.log(coffeeAlreadyExistsInCart)
    const itemSelec = cartItems[coffeeAlreadyExistsInCart]
    if(coffeeAlreadyExistsInCart >= 0) {
      
      name === 'increment' 
        ? copyCoffeesCart[coffeeAlreadyExistsInCart].quantity = copyCoffeesCart[coffeeAlreadyExistsInCart].quantity + 1 
        :copyCoffeesCart[coffeeAlreadyExistsInCart].quantity = copyCoffeesCart[coffeeAlreadyExistsInCart].quantity - 1 
    } 
    console.log("novoarray",copyCoffeesCart)
    setCartItems(copyCoffeesCart)
  }

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
    <CartContext.Provider value={{cartItems, quantityInCart, addCoffeeToCart, changeQuantity}}>
      {children}
    </CartContext.Provider>
  )
}