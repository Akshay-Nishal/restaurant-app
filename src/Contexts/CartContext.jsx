import React, { useReducer, useState } from "react";

export const CartListContext = React.createContext({
    cartList : [],
    cartNumber : null,
    totalAmount : null,
    onAdd:(item)=>{},
    onDelete:(id)=>{},
})

const defaultCart ={
    items:[],
    totalAmount:0,
    cartNumber:0
}

const cartReducer = (state,action) => {
    if(action.type==='Add'){
        let ind = state.items.findIndex((it)=>it.id===action.item.id)
        console.log(ind)
        let newList
        // console.log(action.item);
        if(ind===-1){
            newList = state.items.concat(action.item)
        }
        else{
            let updatedItems = state.items
            let updatedItem = state.items[ind]
            updatedItem.amount=updatedItem.amount+action.item.amount
            updatedItems[ind]=updatedItem
            newList=updatedItems

        }
        const newTotalAmount = state.totalAmount + action.item.price*action.item.amount
        const newCartNumber = state.cartNumber+action.item.amount
        console.log(newList)
        return{
            items:newList,
            totalAmount:newTotalAmount,
            cartNumber:newCartNumber
        }
    }
    else if(action.type==='Remove'){
        let ind = state.items.findIndex((it)=>it.id===action.id)
        let oldList=state.items
        let updatedItem = oldList[ind]
        updatedItem.amount=updatedItem.amount-1 
        const newTotalAmount = state.totalAmount - updatedItem.price
        const newCartNumber = state.cartNumber-1
        if(updatedItem.amount===0){
            if(ind===0){
                oldList.splice(0,1)
            }
            else{
                oldList.splice(ind,ind)
            }
        }
        return{
            items:oldList,
            totalAmount:newTotalAmount,
            cartNumber:newCartNumber
        }
    }
    return(defaultCart)
}

export const CartListProvider = ({children})=>{

    const [cartState,dispatchState]=useReducer(cartReducer,defaultCart)

    const addItem = (item) =>{
        dispatchState({type:'Add',item:item})
    }
    const removeItem = (id) =>{
        dispatchState({type:'Remove',id:id})
    }


    // const [cartList,setCartList] = useState([
    // ])
    // const [cartNumber,setCartNumber] = useState(0)
    // const [totalAmount,setTotalAmount] = useState(0)
    
    // const onAdd = (data,quantityToAdd) =>{
    //     // console.log("Added",data)
    //     // setCartList((prev)=>[...prev,data])
    //     let ind = cartList.findIndex((item)=>item.id===data.id)
    //     // console.log(ind)
    //     if(ind===-1){
    //         console.log(data)
    //         setCartList((prev)=>[...prev,{...data,quantity:quantityToAdd}])
    //     }
    //     else{
    //         let temp = [...cartList]
    //         let updatedItem=cartList[ind]
    //         // console.log(updatedItem)
    //         updatedItem.quantity=updatedItem.quantity+quantityToAdd
    //         // console.log(updatedItem);
    //         temp[ind]=updatedItem
    //         setCartList(temp)
    //     }
    //     setCartNumber(cartNumber+quantityToAdd)
    //     setTotalAmount(totalAmount+data.price*quantityToAdd)
    //     console.log(cartList)
    // }

    // const onDelete = (data) =>{
    //     let ind = cartList.findIndex((item)=>item.id===data.id)
    //     let temp = [...cartList]
    //     let updatedItem=cartList[ind]
    //     updatedItem.quantity=updatedItem.quantity-1
    //     setCartNumber(cartNumber-1)
    //     setTotalAmount(totalAmount-data.price)
    //     if(updatedItem.quantity===0){
    //         console.log("HEREEEE");
    //         temp.pop(ind)
    //         console.log(temp);
    //         setCartList(temp)
    //     }
    //     else{
    //         temp[ind]=updatedItem
    //         setCartList(temp)
    //     }
    //     console.log(cartList)
    // }
    
    
    const values = {
        cartList : cartState.items,
        cartNumber : cartState.cartNumber,
        totalAmount : cartState.totalAmount,
        onAdd : addItem,
        onDelete : removeItem}

    return <CartListContext.Provider value={values}>{children}</CartListContext.Provider>
}
