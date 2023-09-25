import { useContext } from 'react';
import classes from './CartItem.module.css';
import { CartListContext } from '../../Contexts/CartContext';


const CartItem = (props) => {
    const ctx=useContext(CartListContext)
    console.log("Props",props.data)
  const price = `$${props.data.price.toFixed(2)}`;
  const onAdd = ()=>{
    let data={...props.data}
    data.amount=1
    ctx.onAdd(data)
  }

  const onDelete =()=>{
    ctx.onDelete(props.data.id)
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.data.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.data.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onDelete}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;