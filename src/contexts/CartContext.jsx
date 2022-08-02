import { createContext, useState } from "react";
import { CardCoffee } from "../pages/Home/components/CardCoffee";

export const CartContext = createContext({});

export function CartContextProvider( {children} ) {
  const [cartItems, setCartItems] = useState([])
  const quantityInCart = cartItems.length
  
  let deliveryValue = 3.5

  let valueItems = cartItems.reduce((total, item) => total += (item.quantity * item.price), 0)
  // const cartItemsTotal = cartItems.reduce((total, cartItem) => {
  //   return total + cartItem.price * cartItem.quantity
  // }, 0)
  let valueFinal = deliveryValue + valueItems
  console.log(valueFinal)
  function changeQuantity(coffee, name){
    const copyCoffeesCart = [...cartItems]

    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)
    
    if(coffeeAlreadyExistsInCart >= 0) {
      name === 'increment' 
        ? copyCoffeesCart[coffeeAlreadyExistsInCart].quantity = copyCoffeesCart[coffeeAlreadyExistsInCart].quantity + 1 
        :copyCoffeesCart[coffeeAlreadyExistsInCart].quantity = copyCoffeesCart[coffeeAlreadyExistsInCart].quantity - 1 
    } 
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
    <CartContext.Provider value={{cartItems, quantityInCart, deliveryValue, valueItems, valueFinal, addCoffeeToCart, changeQuantity}}>
      {children}
    </CartContext.Provider>
  )
}