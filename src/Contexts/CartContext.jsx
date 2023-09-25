import React, { useState } from "react";

export const CartListContext = React.createContext({
    cartList : [],
    setCartList : ()=>null,
    cartNumber : null,
    setCartNumber : ()=>null,
    totalAmount : null,
    setTotalAmount : ()=>null
})

export const CartListProvider = ({children})=>{
    const [cartList,setCartList] = useState([
        {
            description : "Finest fish and veggies",
            id : "m1",
            name : "Sushi",
            price : 22.99,
            quantity : 1
        }
    ])
    const [cartNumber,setCartNumber] = useState(1)
    const [totalAmount,setTotalAmount] = useState(22.99)
    
    const onAdd = (data) =>{
        // console.log("Added",data)
        // setCartList((prev)=>[...prev,data])
        let ind = cartList.findIndex((item)=>item.id===data.id)
        // console.log(ind)
        if(ind===-1){
            setCartList((prev)=>[...prev,data])
        }
        else{
            let temp = [...cartList]
            let updatedItem=cartList[ind]
            // console.log(updatedItem)
            updatedItem.quantity=updatedItem.quantity+data.quantity
            // console.log(updatedItem);
            temp[ind]=updatedItem
            setCartList(temp)
        }
        setCartNumber(cartNumber+data.quantity)
        setTotalAmount(totalAmount+data.price*data.quantity)
        // console.log(cartList)
    }
    
    
    const value = {cartList,setCartList,cartNumber,setCartNumber,totalAmount,setTotalAmount,onAdd}

    return <CartListContext.Provider value={value}>{children}</CartListContext.Provider>
}
