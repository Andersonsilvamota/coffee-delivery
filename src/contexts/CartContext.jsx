import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider( {children} ) {
  const [cartItems, setCartItems] = useState([])
  const quantityInCart = cartItems.length
  
  let deliveryValue = 3.5

  let valueItems = cartItems.reduce((total, item) => total += (item.quantity * item.price), 0)
  
  let valueFinal = deliveryValue + valueItems
  console.log(valueFinal)

  function resetCart() {
    setCartItems([])
  }

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

  function removeCoffeeToCart(idCoffe){
    const newCartItems = cartItems.filter(item => item.id !== idCoffe)
    setCartItems(newCartItems)
  }

  return (
    <CartContext.Provider 
      value={
        {
          cartItems, 
          quantityInCart, 
          deliveryValue, 
          valueItems, 
          valueFinal, 
          addCoffeeToCart,
          removeCoffeeToCart, 
          changeQuantity,
          resetCart
        }
      }>
      {children}
    </CartContext.Provider>
  )
}