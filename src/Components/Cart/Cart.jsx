import React, { useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { CartListContext } from '../../Contexts/CartContext';
import CartItem from './CartItem';


function Cart(props) {
  const ctx = useContext(CartListContext)
  // console.log(ctx.cartList)
  if(!props.show) return null;
  const CartItems = (
    <ul className={classes['cart-items']}>
      {ctx.cartList.map((item)=>{
        return(
          <CartItem key={item.id} data={item}/>
        )
      })}
    </ul>
  )
  return (
    <Modal changeCartShow={props.changeCartShow}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount.toFixed(2)} $</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.changeCartShow} className={classes['button--alt']} >Close</button>
        {ctx.cartNumber > 0 &&<button className={classes.button} >Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
